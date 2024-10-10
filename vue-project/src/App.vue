<template>
  <main>
    <div class="logo"><h1> My to-do list </h1></div>

    <div class="my-style">
      <todo-list :todos="todos"
                 :key="todos.id"/>
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
          items: [{
            id: new Date().getTime(),
            name: 'Add New Todo',
            done: false
          },
            {
              id: new Date().getTime(),
              name: 'Super task',
              done: true
            },
            {
              id: new Date().getTime(),
              name: 'My new task',
              done: false
            }]
        },
        {
          id: new Date().getTime() + 1,
          title: 'My Title Todo',
          items: [{
            id: new Date().getTime(),
            name: 'My new task',
            done: true
          }]
        },
        {
          id: new Date().getTime() + 2,
          title: 'Add New Title',
          items: [{
            id: new Date().getTime(),
            name: 'Super task',
            done: true
          },
            {
              id: new Date().getTime(),
              name: 'My new task',
              done: false
            }]
        },
      ]
    }
  },
}
</script>
