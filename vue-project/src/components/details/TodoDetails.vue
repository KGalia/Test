<template>
  <div>
    <div class="my-style">
      <template v-if="isVisible">
        <input v-model="newTitle"
               @keyup.enter="addTitle"
               class="input-create-item"
               type="text"
               placeholder="Add Title Todo">
      </template>

      <template v-else>
        <h2 title="Change list title"
            @click="show"
            class="logo-title-todo">{{ todo.title }}</h2>
      </template>

      <TodoDetailsItemsList
          :items="todo.items"
      />

      <template v-if="isVisibleInput">
        <input v-model="nameTask"
               @keyup.enter="addNewTask"
               class="input-create-item"
               type="text"
               placeholder="Add new task">
      </template>

      <template v-else>
        <div>
          <Buttons @click="showInput"
                   class="btn-new-task">ADD
          </Buttons>
        </div>
      </template>

      <hr>

      <div class="btn-add">
        <router-link to="/">
          <Buttons @click="editTodo()"
                   class="btn-save"> Save
          </Buttons>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import TodoDetailsItemsList from "@/components/details/TodoDetailsItemsList.vue";
import {useTodoStore} from "@/stores/TodoStore.js";
import Buttons from "@/components/UI/Buttons.vue";
import {ref} from "vue";
import {v4 as uuidv4} from "uuid";

const todoStore = useTodoStore();

const newTitle = ref("");
const isVisible = ref(false);
const isVisibleInput = ref(false);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },

});

const nameTask = ref("")

const todo = todoStore.findTodo(props.id);

const editTodo = () => {
  todoStore.editTodo(todo)
};

const addTitle = () => {
  todo.title = newTitle.value;
  isVisible.value = !isVisible.value;
}
const show = () => {
  isVisible.value = !isVisible.value;
}

const showInput = () => {
  isVisibleInput.value = !isVisibleInput.value;
}

const addNewTask = () => {
  todo.items.push(
      {
        id: uuidv4(),
        name: nameTask,
        done: false,
        isDeleted: false
      })

  isVisibleInput.value = !isVisibleInput.value;
}

</script>

<style scoped>
.btn-save {
  background-color: rgb(214, 213, 213);
  color: #4e4c4c;
  transition: all 0.7s ease;
  padding: 5px 10px;
  margin: 5px 5px;
}

.btn-save:hover {
  background-color: rgb(234, 231, 231);
}

.btn-new-task {
  background-color: rgb(20, 172, 159);
  color: #f6f7f8;
  font-size: 14px;
  transition: all 0.7s ease;
  padding: 5px 15px;
  margin: 5px 5px;
}

.btn-new-task:hover {
  background-color: rgb(5, 101, 101);
}

</style>
