<template>

  <input class="input-create-item"
  type="text"
  placeholder="Add Title Todo">

  <h2 title="Change list title"
      class="logo-title-todo">{{newTodo.title}}</h2>
  <hr>

</template>

<script>
export default {
  components: {},
  props: {
    newTodo: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>

</style>