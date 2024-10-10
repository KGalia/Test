<template>
  <todo v-for="todo in todoList"
        :todo="todo"
  />
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  components: {Todo},
  props: {
    todos: {type: Array, required: true},
  },

  data() {
    return {
      todoList: this.todos,
    }
  },
  methods: {},
}
</script>

<style scoped>

</style>