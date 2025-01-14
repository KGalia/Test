<template>
  <div class="logo">
    <h1> Details To-Do </h1>
  </div>
  <div class="my-style">
    <TodoDetails :id="props.id"

    />
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


