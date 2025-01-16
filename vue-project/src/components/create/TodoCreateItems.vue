<template>

    <InputCreateItem
        :newItems="props.newTodo.items"/>

</template>

<script setup>
import InputCreateItem from "@/components/create/InputCreateItem.vue";

const props = defineProps({
  newTodo:{
    type: Object,
    required: true,
    default:() => {}
  },
});
</script>

<style scoped>
</style>