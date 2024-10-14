<template>
  <div class="my-style">
    <router-link :to="{ name: 'TodoPage', params: {id: todo.id} }">
    <h2> {{ todo.title }} </h2>
    </router-link>
    <TodoItemsList
        :items="todo.items"
    />

  </div>
</template>

<script>
import TodoItemsList from "@/components/TodoItemsList.vue";

export default {
  components: { TodoItemsList},
  props: {
    todo: {
      type: Object,
      required: true
    },
  },
}
</script>

