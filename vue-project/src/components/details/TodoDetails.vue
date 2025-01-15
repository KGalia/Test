<template>
  <div>
    <div class="my-style">

      <h2> {{ findTodo(props.id).title }} </h2>

      <TodoDetailsItemsList
          :items="findTodo(props.id).items"
      />

    </div>
  </div>
</template>

<script setup>
import TodoDetailsItemsList from "@/components/details/TodoDetailsItemsList.vue";
import {storeToRefs} from 'pinia';
import {useTodoStore} from "@/stores/TodoStore.js";

const todoStore = useTodoStore();
const {findTodo} = storeToRefs(todoStore)

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

// function find(id) {
//   return todo = todoStore.todos.find((todo) => todo.id.toString() === id);
// }

</script>
