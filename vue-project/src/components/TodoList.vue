<template>
  <todo v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
  />
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  components: {Todo},
  props: {
    todos: {type: Array, required: true},
  }
}
</script>
