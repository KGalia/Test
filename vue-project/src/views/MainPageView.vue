<template>
  <main>
    <div class="logo"><h1> My to-do list </h1></div>

    <div class="my-style">
      <TodoList/>
    </div>
  </main>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: 'MainPage',

  components: {TodoList},

}
</script>