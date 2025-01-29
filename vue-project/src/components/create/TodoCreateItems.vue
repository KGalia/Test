<template>

    <InputCreateItem
        :newItems="props.newItems"
        v-for="item in props.newItems"
        :key="item.id"
        :newItem="item"
        :newItem.id="item.id"
        :newItem.name="item.name"
        :newItem.done="item.done"
        :newItem.isDeleted="item.isDeleted"
    />

  <div class="btn-task">
    <Buttons @click="addTask"
             class="btn-add-task"> Add Task
    </Buttons>
  </div>

</template>

<script setup>
import InputCreateItem from "@/components/create/InputCreateItem.vue";
import Buttons from "@/components/UI/Buttons.vue";
import {v4 as uuidv4} from "uuid";

const props = defineProps({
  newItems: {
    type: Array,
    required: true,
    default: () => {
    }
  },
});

const addTask = () => {
  props.newItems.push(
      {
        id: uuidv4(),
        name: '',
        done: false,
        isDeleted: false,
      })
}
</script>

<style scoped>
.btn-add-task {
  background-color: rgb(20, 172, 159);
  color: #f6f7f8;
  font-size: 14px;
  transition: all 0.7s ease;
  padding: 5px 15px;
  margin: 5px 5px;
}

.btn-add-task:hover {
  background-color: rgb(5, 101, 101);
}

.btn-task {
  text-align: left;
}

</style>