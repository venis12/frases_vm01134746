

const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {

        const FrasesFinales = ref([
            { frase: '"El código limpio es el arte que pocos aprecian."', autor: 'Desarrollador perfeccionista' },
            { frase: '"El mejor código es el que no se necesita escribir."', autor: 'Arquitecto de software minimalista' },
            { frase: '"Debuggear es como ser un detective en un crimen donde tú mismo eres el culpable."', autor: 'Programador experimentado' },
            { frase: '"Automatiza lo tedioso, invierte en lo creativo."', autor:'Ingeniero DevOps' },
            { frase: '"El verdadero desafío no es escribir código, sino mantenerlo entendible."', autor: 'Líder técnico' }
        ]);

        const NFrase = ref('');
        const NAutor = ref('');

        const contador = computed(() => FrasesFinales.value.length);

        const editando = ref(false);
        const editIndex = ref(null);
        const editFrase = ref('');
        const editAutor = ref('');

        const agregar = () => {

            if (NFrase.value && NAutor.value) {
                FrasesFinales.value.push({
                    frase: NFrase.value,
                    autor: NAutor.value
                });

                NFrase.value = "";
                NAutor.value = "";
            }

        }

        const eliminar = (num) => {
            FrasesFinales.value.splice(num, 1);
        }

        const editar = (index) => {
            editando.value = true;
            editIndex.value = index;
            editFrase.value = FrasesFinales.value[index].frase;
            editAutor.value = FrasesFinales.value[index].autor; 
            
        };

        const guardar = () => {
            if (editIndex.value !== null) {
                FrasesFinales.value[editIndex.value].frase = editFrase.value;
                FrasesFinales.value[editIndex.value].autor = editAutor.value;
                cancelar();
            }
        };

        const cancelar = () => {
            editando.value = false;
            editIndex.value = null;
            editFrase.value = '';
            editAutor.value = '';
        };


        return {
            FrasesFinales,
            agregar,
            NAutor,
            NFrase,
            contador,
            eliminar,
            editar,
            editFrase,
            editAutor,
            editando,
            guardar,
            cancelar
        };

    }
}).mount('#app')