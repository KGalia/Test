<template>

  <template v-if="isVisible">
    <input v-model="newTitle"
           @keyup.enter="addTitle"
           class="input-create-item"
           type="text"
           placeholder="Add Title Todo">
  </template>

  <template v-else>
    <h2 title="Change list title"
        class="logo-title-todo">{{ props.newTodo.title }}</h2>
  </template>
  <hr>
</template>

<script setup>
import {ref} from "vue";

const newTitle = ref("");
const isVisible = ref(true);

const props = defineProps({
  newTodo: {
    type: Object,
    required: true,
    default: () => {
    }
  },
})

const addTitle =() => {
  props.newTodo.title = newTitle.value;
  isVisible.value = false;
}

</script>

<style scoped>

</style>