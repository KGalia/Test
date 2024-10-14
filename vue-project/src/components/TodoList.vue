<template>
  <Todo
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
  />
</template>

<script>
import Todo from "@/components/Todo.vue";
import { todos } from "../../public/data.js";

export default {
  components: {Todo},
  data() {
    return {
      todos: todos
    }
  }
}
</script>
