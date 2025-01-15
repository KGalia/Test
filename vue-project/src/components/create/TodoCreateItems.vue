<template>

    <InputCreateItems/>

</template>

<script setup>
import InputCreateItems from "@/components/create/InputCreateItems.vue";
import {storeToRefs} from 'pinia';
import {useTodoStore} from "@/stores/TodoStore.js";

const todoStore = useTodoStore();
const {addItemTodo} = storeToRefs(todoStore);


</script>

<style scoped>
</style>