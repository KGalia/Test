<template>
  <div class="my-style">
    <router-link :to="{ name: 'TodoPage', params: {id: props.todo.id} }">
      <h2> {{ props.todo.title }} </h2>
    </router-link>

    <TodoItemsList
        :items="props.todo.items"
    />

    <div class="btn-add">
      <Buttons @click="store.deleteTodo(todo.id)"
          class="btn-del-todo">Delete</Buttons>
    </div>

  </div>
</template>

<script setup>
import Buttons from "@/components/UI/Buttons.vue";
import {useTodoStore} from "@/stores/TodoStore.js";

const store = useTodoStore();

const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => {
    }
  }
})
import TodoItemsList from "@/components/main/TodoItemsList.vue";
</script>

<style scoped>
.btn-del-todo {
  background-color: rgb(228, 83, 83);
  color: #fffefe;
  transition: all 0.7s ease;
  padding: 7px;
  margin: 15px 0 5px 0;
  font-size: 12px;
}

.btn-del-todo:hover {
  background-color: rgb(248, 138, 138);
}

</style>