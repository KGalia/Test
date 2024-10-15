<template>
  <div class="logo">
    <h2>Details To-Do</h2>
  </div>
  <div class="my-style">
    <TodoDetails
        :id="id"
        :todos="todos"
    />
  </div>
</template>

<script>
import TodoDetails from "@/components/details/TodoDetails.vue";
import {todos} from "/public/data.js";

export default {
  name: "DetailsPage",
  components: {TodoDetails},
  props: {
    id: String,
  },

  data() {
    return {
      todos: todos,
    }
  }
}
</script>
