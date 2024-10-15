<template>
  <div>
    <TodoDetailsItem
        v-for="item in items"
        :key="item.id"
        :item="item"
    />
  </div>
</template>

<script>
import TodoDetailsItem from "@/components/details/TodoDetailsItem.vue";

export default {
  components: {TodoDetailsItem},

  props: {
    items: {
      type: Array,
      required: true
    },
  }
}
</script>
