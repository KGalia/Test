<template>
  <div class="my-style">
    <div >
        <h2 title="Change list title"
            class="task-title">
          {{ titleTodo }}
        </h2>
    </div>
<div class="form-add-task">

</div>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  components: {Todo},
  props: {
    id: {type: Number, required: true},
    todos:{type: Array, required: true},
    title: {type: String, required: true},
  },

  data() {
    return {
      todosId: this.id,
      titleTodo: this.title,
      todosItem: this.todos,
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>