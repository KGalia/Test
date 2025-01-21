<template>

  <InputCreateTitle
      :newTodo="newTodo"/>

  <TodoCreateItems
      :newItems="newTodo.items"/>

  <div v-if="newTodo.items.length > 0"
       class="btn-add">
    <router-link to="/">
      <Buttons @click="saveTodo">SAVE</Buttons>
    </router-link>
  </div>

</template>

<script setup>

import InputCreateTitle from "@/components/create/InputCreateTitle.vue";
import Buttons from "@/components/UI/Buttons.vue";
import TodoCreateItems from "@/components/create/TodoCreateItems.vue";
import {useTodoStore} from "@/stores/TodoStore.js";
import {ref} from "vue";
import {v4 as uuidv4} from "uuid";

const store = useTodoStore();

const newTodo = ref({
  id: uuidv4(),
  title: '',
  items: []
});

const saveTodo = () => {
    store.createTodo(newTodo);

  console.log(newTodo);
}
</script>