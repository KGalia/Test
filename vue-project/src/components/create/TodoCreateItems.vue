<template xmlns="http://www.w3.org/1999/html">

  <div v-if="props.newItems.length === 0"
       class="btn-task">

    <Buttons @click="addTask"
             class="btn-add-task"> Add Task
    </Buttons>
  </div>

  <div v-else>
    <InputCreateItem
        :newItems="props.newItems"
        v-for="item in props.newItems"
        :key="item.id"
        :newItem="item"
        :newItem.id="item.id"
        :newItem.name="item.name"
        :newItem.done="item.done"
    />
  </div>

</template>

<script setup>
import InputCreateItem from "@/components/create/InputCreateItem.vue";
import Buttons from "@/components/UI/Buttons.vue";

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
        id: 1,
        name: '',
        done: false
      })
}
</script>

<style scoped>
.btn-add-task {
  background-color: rgb(214, 213, 213);
  color: #4e4c4c;
  transition: all 0.7s ease;
  padding: 7px;
  margin: 5px 0 5px 0;
}

.btn-add-task:hover {
  background-color: rgb(234, 231, 231);
}

.btn-task {
  text-align: center;
}

</style>