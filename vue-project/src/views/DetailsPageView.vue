<template>
  <div class="logo">
    <h2> Details To-Do </h2>
  </div>
  <div class="my-style">
    <TodoDetails :id="id"

    />
  </div>
</template>

<script setup>
import TodoDetails from "@/components/details/TodoDetails.vue";

// import {todos} from "/public/data.js";

const props = defineProps({

      id: {
        type: String,
        required: true,
      }
    }
)
</script>

// export default {
//   name: "DetailsPage",
//   components: {TodoDetails},
//   props: {
//     id: String,
//   },
//
//   data() {
//     return {
//       todos: todos,
//     }
//   }
// }

