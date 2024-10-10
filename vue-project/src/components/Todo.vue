<template>
  <div class="my-style">
    <div :id="todo.id">
      <h2 class="task-title">
        {{ todo.title }}
      </h2>
    </div>

    <todo-items-list :items ="todo.items"
                     :key="todo.items.id"
     />
  </div>
</template>

<script>
import TodoItemsList from "@/components/TodoItemsList.vue";

export default {
  components: {TodoItemsList},
  props: {
    todo: {type: Object, required: true},
  }
}
</script>
