<template>
  <div class="task-item">
    <!--    <div class="task-item">-->
    <!--      <input-->
    <!--          type="checkbox"-->
    <!--          :id="props.newItem.id"-->
    <!--          :checked="props.newItem.done"-->
    <!--          class="checkbox-label"-->
    <!--      />-->
    <!--      <label-->
    <!--          :for="props.newItem.id"-->
    <!--          :class="{text_list_isShow:props.newItem.done }"-->
    <!--      >-->

    <!--      </label>-->
    <!--    </div>-->
    <ul class="task-li">
      <li> {{ task.value }}</li>
    </ul>

    <input v-model="task"
           type="text"
           :id="props.newItem.id"
           placeholder="Add a task"
           class="input-create-item"
    >

    <div class="btn-add">
      <Buttons class="btn-input-todo"
               @click="addItem">➕
      </Buttons>
    </div>

  </div>
</template>

<script setup>
import Buttons from "@/components/UI/Buttons.vue";
import {ref} from "vue";
import {v4 as uuidv4} from "uuid";

const task = ref('');
const props = defineProps({
  newItems: {
    type: Array,
    required: true,
  },
  newItem: {
    type: Object,
    required: true,
    default: () => {
    }
  },
});


const addItem = () => {
  props.newItems.unshift(
      {
        id: uuidv4(),
        name: task.value,
        done: false
      })
  console.log(props.newItems)
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