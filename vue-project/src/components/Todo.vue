<template>
  <div class="my-style">
    <div :id="id">
      <h2 class="task-title">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo:{Object, required:true}
  },

  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
    }
  },

  methods: {}
}

</script>

<style scoped>

</style>