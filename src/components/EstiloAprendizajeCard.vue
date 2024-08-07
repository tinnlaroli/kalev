<template>
    <div :class="['card', { selected: isSelected }]" @click="selectEstilo">
        <img :src="estilo.imagen" alt="estilo imagen">
        <div>{{ estilo.nombre }}</div>
    </div>
</template>

<script>
export default {
props: {
    estilo: Object,
    isSelected: Boolean
},
methods: {
    selectEstilo() {
    this.$emit('select-estilo', this.estilo);
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
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card img {
    width: 100px;
    height: 100px;
}

.selected {
    background-color: lightblue;
}
</style>
