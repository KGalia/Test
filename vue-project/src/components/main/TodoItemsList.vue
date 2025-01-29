<template>
  <div>
    <TodoItem
        v-for="item in items"
        :key="item.id"
        :item="item"
    />
  </div>
</template>

<script setup>
import TodoItem from "@/components/main/TodoItem.vue"

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
});
</script>
