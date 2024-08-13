<template>
    <v-card class="materia-card" elevation="3" @click="selectMateria" :class="{ 'selected-card': isSelected }">
        <v-img :src="materia.image" alt="Materia Image" class="materia-image" contain></v-img>
        <v-card-title class="materia-title">{{ materia.name }}</v-card-title>
    </v-card>
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
.materia-card {
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    border-radius: 10px;
    overflow: hidden;
}

.materia-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

.materia-image {
    height: 150px;
}

.materia-title {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: #333;
}

.selected-card {
    border: 2px solid var(--v-primary-base);
    background-color: var(--v-primary-lighten5);
}

.selected-card .materia-title {
    color: var(--v-primary-darken2);
}
</style>