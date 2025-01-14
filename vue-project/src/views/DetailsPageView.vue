<template>
  <div class="logo">
    <h2> Details To-Do </h2>
  </div>
  <div class="main-container">
    <TodoDetails :id="props.id"/>
  </div>
</template>

<script setup>
import TodoDetails from "@/components/details/TodoDetails.vue";

const props = defineProps({
      id: {
        type: String,
        required: true,
      }
    }
)
</script>


