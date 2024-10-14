<template>
  <div>
    <Todo :todo="find(id)"/>
  </div>
</template>

<script>
import Todo from "@/components/details/Todo.vue";

export default {
  components: {Todo},
  props: {
    id: String,
    todo: Object,
    todos: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      todosDetails: this.todos,
      todoItem:{
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
      this.todosDetails.map((todo) => {
            if (todo.id == id) {
              this.todoItem = todo;
            }
            return todo;
          }
      );
      return this.todoItem;
    }
  }
}
</script>
