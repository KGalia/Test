<template>
  <div>
    <div class="my-style">

      <h2> {{ findTodo(props.id).title }} </h2>

      <TodoDetailsItemsList
          :items="findTodo(props.id).items"
      />
      <div>
        <Buttons class="btn-new-task">ADD</Buttons>
      </div>
<hr>
      <div class="btn-add">
        <Buttons class="btn-save">Save</Buttons>
      </div>

    </div>
  </div>
</template>

<script setup>
import TodoDetailsItemsList from "@/components/details/TodoDetailsItemsList.vue";
import {storeToRefs} from 'pinia';
import {useTodoStore} from "@/stores/TodoStore.js";
import Buttons from "@/components/UI/Buttons.vue";

const todoStore = useTodoStore();
const {findTodo} = storeToRefs(todoStore)

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
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
