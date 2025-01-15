<template>
  <div class="my-style">
    <router-link :to="{ name: 'TodoPage', params: {id: props.todo.id} }">
    <h2> {{ props.todo.title }} </h2>
    </router-link>

    <TodoItemsList
        :items="props.todo.items"
    />

  </div>
</template>

<script setup>
const props = defineProps({
  todo:{
    type: Object,
    required: true,
    default:() => {}
  }
})
import TodoItemsList from "@/components/main/TodoItemsList.vue";
</script>

