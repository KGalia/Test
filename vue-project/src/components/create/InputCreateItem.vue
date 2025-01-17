<template>
  <div class="task-item">
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

  <div class="task-item">
    <input
        type="checkbox"
        :id="props.newItem.id"
        :checked="props.newItem.done"
        class="checkbox-label"
    />
    <label
        :for="props.newItem.id"
        :class="{text_list_isShow:props.newItem.done }"
    >
      <p>{{ props.newItem.name }}</p>

    </label>
  </div>
  <hr>
</template>

<script setup>
import Buttons from "@/components/UI/Buttons.vue";
import {ref} from "vue";
import {v4 as uuidv4} from "uuid";
import {useTodoStore} from "@/stores/TodoStore.js";

const store = useTodoStore();

const task = ref('');
const props = defineProps({
  newItem: {
    type: Object,
    required: true,
    id: Number,
    name: String,
    done: Boolean
  },
  newItems: {
    type: Array,
    required: true
  }
});
// const addItem = () => {
//   let newItemTask = {
//     id: uuidv4(),
//     name: task.value,
//     done: false
//   }
//   store.addItem(newItemTask);
// }

// const newItem = ref({
//
// });

const addItem = () => {
 props.newItems.push(
      { id :uuidv4(),
        name: task.value,
        done: false
  })
  store.addItem (props.newItems);
  console.log(props.newItems)
}

// const addItem = () => {
//   props.newItems.push(
//       { id :uuidv4(),
//         name: task.value,
//         done: false
//   })
//
//   store.addItemTask(addItem);
// }

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