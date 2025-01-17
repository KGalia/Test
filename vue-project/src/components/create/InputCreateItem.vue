<template>
  <div class="task-item">

  <input v-model="props.newItem.name"
         type="text"
         :id="props.newItem.id"
         placeholder="Name task"
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
</script>

