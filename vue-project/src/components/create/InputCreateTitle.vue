<template>

  <input class="input-create-item"
  type="text"
  placeholder="Add Title Todo">

  <h2 title="Change list title"
      class="logo-title-todo">{{props.newTodo.title}}</h2>
  <hr>

</template>

<script setup>
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