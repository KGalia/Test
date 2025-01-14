<template>
  <Todo v-for="todo of todoStore.todos"
      :todo="todo"
      :key="todo.id"
  />
</template>

<script setup>
import Todo from "@/components/main/Todo.vue";
import { useTodoStore } from "@/stores/TodoStore.js";

const todoStore = useTodoStore();
</script>
