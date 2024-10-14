<template>
  <div class="my-style">

      <h2>{{ id }} {{ todo.title }} </h2>

    <TodoItemsListDetails
        :items="todo.items"
    />

  </div>
</template>

<script>
import TodoItemsListDetails from "@/components/details/TodoItemsListDetails.vue";

export default {
  components: { TodoItemsListDetails },
  props: {
    id: String,
    todo: {
      type: Object,
      required: true,
    },
  },
}
</script>

