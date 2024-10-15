<template>
  <div>
    <TodoItem
        v-for="item in items"
        :key="item.id"
        :item="item"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/main/TodoItem.vue"

export default {
  components: {TodoItem},

  props: {
    items: {
      type: Array,
      required: true
    },
  }
}
</script>
