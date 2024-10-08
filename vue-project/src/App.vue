<template>
  <main>
    <div class="logo"><h1> My to-do list </h1></div>

    <div class="my-style">
      <todo-list :todos="todos"
                 v-for="item in todos"
                 :key="item.id"
                 :id="item.id"
                 :title="item.title"
                 :todo="item.todo"
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
          todo: [{id: new Date().getTime(), point: 'Wake up and have breakfast:)', done: false},
            {id: new Date().getTime(), point: 'Create a Vue project:)', done: true},
            {id: new Date().getTime(), point: 'Walking with the dog:)', done: false}]
        },
        {
          id: new Date().getTime() + 1,
          title: 'My Title Todo',
          todo: [{id: new Date().getTime(), point: 'Reading a book', done: true},
            {id: new Date().getTime(), point: 'Breakfast', done: true}]
        },
        {
          id: new Date().getTime() + 2,
          title: 'Add New Title',
          todo: [{id: new Date().getTime(), point: 'Reading a book :)', done: true},
            {id: new Date().getTime(), point: 'Walking with the dog:)', done: false}]
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>