<template>
  <div>
    <TodoItemDetails
        v-for="item in items"
        :key="item.id"
        :item="item"
    />
  </div>
</template>

<script>
import TodoItemDetails from "@/components/details/TodoItemDetails.vue";

export default {
  components: {TodoItemDetails},

  props: {
    items: {
      type: Array,
      required: true
    },
  }
}
</script>
