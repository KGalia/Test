<template>
  <div>
    <todo-item v-for="item in items"
               :key="item.id"
               :item="item" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue"

export default {
  components: {TodoItem},

  props: {
    items: {type: Array, required: true},
  }

}
</script>
