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

<script setup>
const props = defineProps({
  todo:{
    type: Object,
    required: true,
    default:() => {}
  }
})
import TodoItemsList from "@/components/main/TodoItemsList.vue";
//
// export default {
//   components: { TodoItemsList},
//   props: {
//     todo: {
//       type: Object,
//       required: true
//     },
//   },
// }
</script>

