<template>
  <div>
    <div class="my-style">

      <h2> {{ find(id).title}} </h2>

      <TodoItemsListDetails
          :items="this.todo.items"
      />
    </div>
  </div>
</template>

<script>
import TodoItemsListDetails from "@/components/details/TodoDetailsItemsList.vue";

export default {
  components: {TodoItemsListDetails},
  props: {
    id: String,
    todos: {
      type: Array,
      required: true
    },
  },

  data() {
    return {
      todosDetails: this.todos,
      todo:{
        id: this.id,
        title: "Title",
        items:[{
          id: 1,
          name: "Name ToDo",
          done: false
        }]
      }
    }
  },

 methods: {
    find(id) {
     return this.todo = this.todosDetails.find((todo) => todo.id.toString() === id);
    }
  }
}
</script>
