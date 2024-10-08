<template>
  <div class="my-style">
    <div @submit.prevent="saveTitle">
      <template v-if="isVisible">
        <h2 @click="hideTitle"
            title="Change list title"
            class="task-title">
          {{ titleTodo }}
        </h2>
      </template>

      <template v-else>
        <div class="task-name">
          <input
              v-model="titleTodo"
              @keyup.enter="saveTitle"
              placeholder="Task list name"
              class="task-input"
              type="text"
          >

          <buttons-todo
              @click="saveTitle"
              class="btn-item">✔️
          </buttons-todo>
        </div>
      </template>
    </div>
<div class="form-add-task">
    <ul>
      <li v-for="item in todoItem" :key="item.id">
        <todo
            :id="item.id"
            :point="item.point"
            :done="item.done"
            @toggleStatus="toggleStatus"
        />
      </li>
    </ul>
</div>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import buttonsTodo from "@/components/UI/ButtonsTodo.vue";

export default {
  components: {Todo, buttonsTodo},
  props: {
    id: {type: Number, required: true},
    todos:{type: Array, required: true},
    title: {type: String, required: true},
    todo: {type: Array, required: true}
  },

  data() {
    return {
      todosId: this.id,
      titleTodo: this.title,
      todoItem: this.todo,
      isVisible: true,
      todosItem: this.todos,
    }
  },
  methods: {
    hideTitle() {
      this.isVisible = false;
    },
    saveTitle() {
      this.isVisible = true;
      if (this.titleTodo !== '') {
        this.todosItem.push({
          id: new Date().getTime(),
          title: this.titleTodo,
        })
      }
    },
    toggleStatus(id, isDone) {
      this.todoItem.map((item) => {
        if (item.id === id) {
          item.done = isDone;
        }
        return item;
      })
    },
  },
}
</script>

<style scoped>

</style>