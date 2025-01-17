<template>
  <div class="task-item">

  <input v-model="props.newItem.name"
         type="text"
         :id="props.newItem.id"
         placeholder="Add a task"
         class="input-create-item"
  >

  </div>

</template>

<script setup>

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

// const addItem = () => {
//  props.newItems.push(
//       { id :uuidv4(),
//         name: task.value,
//         done: false
//   })
//   store.addItem (props.newItems);
//   console.log(props.newItems)
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