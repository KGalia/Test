<template>
  <div>
    <TodoDetailsItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        :items="items"
    />
    <template v-if="isVisibleInput">
      <input v-model="nameTask"
             @keyup.enter="addNewTask()"
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
  </div>
</template>

<script setup>
import TodoDetailsItem from "@/components/details/TodoDetailsItem.vue";
import Buttons from "@/components/UI/Buttons.vue";
import {ref} from "vue";
import {v4 as uuidv4} from "uuid";

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
});

const isVisibleInput = ref(false);
const nameTask = ref("");

const showInput = () => {
  isVisibleInput.value = !isVisibleInput.value;
}

const addNewTask = () => {
   props.items.push(
      {
        id: uuidv4(),
        name: nameTask.value,
        done: false,
        isDeleted: false
      }
  );

  isVisibleInput.value = !isVisibleInput.value;
}
</script>

<style scoped>
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