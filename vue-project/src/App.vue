<template>
  <main>
    <div class="logo"><h1> My to-do list </h1></div>

    <div class="my-style">
      <todo-list :todos="todos"
                 v-for="item in todos"
                 :key="item.id"
                 :id="item.id"
                 :title="item.title"
      />
    </div>
  </main>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: 'TodoApp',
  components: {TodoList},
  data() {
    return {
      todos: [
        {
          id: new Date().getTime(),
          title: 'Add Title Todo',
        },
        {
          id: new Date().getTime() + 1,
          title: 'My Title Todo',
        },
        {
          id: new Date().getTime() + 2,
          title: 'Add New Title',
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>