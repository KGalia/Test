<template>
  <div class="task-item">
    <input v-model="newItemTodo"
           type="text"
           placeholder="Add a task"
           @keyup.enter="addItemTodo"
           class="input-create-item"
    >

    <div class="btn-add">
      <Buttons class="btn-input-todo"
               @click="addItemTodo">➕
      </Buttons>
    </div>
  </div>

  <div class="task-li">
    <p> New task </p>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Buttons from "@/components/UI/Buttons.vue";
import {v4 as uuidv4} from "uuid";
import {useTodoStore} from "@/stores/TodoStore.js";

const store = useTodoStore();

const newItemTodo = ref("");

const addItemTodo = () => {
  let newItem = {
    id: uuidv4(1),
    name: newItemTodo.value,
    done: false
  }
  store.addItemTodo(newItem)
}

</script>

<style scoped>
.btn-input-todo {
  background-color: rgba(36, 159, 149, 0.6);
  color: #044c4c;
  transition: all 0.7s ease;
  padding: 5px;
}

.btn-input-todo:hover {
  background-color: rgb(36, 159, 149);
}

</style>