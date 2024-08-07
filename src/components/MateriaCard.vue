<template>
    <div class="card" @click="selectMateria">
        <img :src="materia.image" alt="Materia Image">
        <button :class="{'selected': isSelected}">{{ materia.name }}</button>
    </div>
</template>

<script>
    /**
     * Componente para representar una tarjeta de materia.
     */
    export default {
        props: ['materia', 'isSelected'],
        methods: {
            /**
             * Método que se ejecuta cuando se selecciona una materia.
             * Emite el evento 'select-materia' con la materia seleccionada.
             */
            selectMateria() {
                this.$emit('select-materia', this.materia);
            }
        }
    };
</script>

<style scoped>
    .card {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 5px;
        cursor: pointer;
    }

    .card img {
        width: 100px;
        height: 100px;
    }

    button.selected {
        background-color: lightblue;
    }
</style>
