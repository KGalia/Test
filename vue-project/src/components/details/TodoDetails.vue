<template>
  <div>
    <div class="my-style">

      <h2> {{ todo.title }} </h2>

      <TodoDetailsItemsList
          :items="todo.items"
      />
      <div>
        <Buttons class="btn-new-task">ADD</Buttons>
      </div>
<hr>
      <div class="btn-add">
        <router-link to="/">
        <Buttons @click="editTodo()"
            class="btn-save">Save</Buttons>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import TodoDetailsItemsList from "@/components/details/TodoDetailsItemsList.vue";
import {useTodoStore} from "@/stores/TodoStore.js";
import Buttons from "@/components/UI/Buttons.vue";

const todoStore = useTodoStore();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },

});

const todo = todoStore.findTodo(props.id);

const editTodo = () => {
  todoStore.editTodo(todo)
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
