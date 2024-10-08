<template>

  <div>
    <input type="checkbox"
           :id="id"
           :checked="isDone"
           v-on:change="toggleStatusTodo(id)"
           class="checkbox-label"/>

    <label :for="id"
           @click="toggleStatusTodo(id)"
           :class="{text_list_isShow:isDone }">{{ point }}</label>
  </div>

</template>

<script>
export default {
  props: {
    id: {type: Number, required: true},
    point: {type: String, required: true},
    done: {type: Boolean, default: false},
    toggleStatus: {type: Function,},
  },

  emits:['toggleStatus'],

  data() {
    return {
      isDone: this.id,
    }
  },

  methods:{
    toggleStatusTodo(id) {
      this.isDone = !this.isDone;
      this.$emit('toggleStatus', id, this.isDone);
    },
  },
}
</script>

<style scoped>

</style>