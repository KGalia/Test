<template>
  <div v-if="todoStore.todos !== null && todoStore.todos.length !== 0">
  <Todo v-for="todo of todoStore.todos"
      :todo="todo"
      :key="todo.id"
  />
  </div>
  <div v-else class="my-style">
    <router-link to="/create-page">
      <h2> Add the first task </h2>
    </router-link>
  </div>
</template>

<script setup>
import Todo from "@/components/main/Todo.vue";
import { useTodoStore } from "@/stores/TodoStore.js";

const todoStore = useTodoStore();
</script>
