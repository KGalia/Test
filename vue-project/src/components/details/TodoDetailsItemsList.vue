<template>
  <div>
    <TodoDetailsItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        :items="items"
    />
  </div>
</template>

<script setup>
import TodoDetailsItem from "@/components/details/TodoDetailsItem.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
});
</script>
