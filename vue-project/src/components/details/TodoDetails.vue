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

const todoStore = useTodoStore();

const newTitle = ref("");
const isVisible = ref(false);


const props = defineProps({
  id: {
    type: String,
    required: true,
  },

});

const todo = todoStore.findTodo(props.id);

const editTodo = () => {
  todoStore.editTodo(todo)
};
const addTitle = () => {
  todo.title = newTitle.value;
  isVisible.value = !isVisible.value;
};
const show = () => {
  isVisible.value = !isVisible.value;
};

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

</style>
