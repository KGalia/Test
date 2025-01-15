<template>
  <div class="task-item">
    <input
           type="text"
           placeholder="Add a task"
           @keyup.enter=""
           class="input-create-item"
    >

    <div class="btn-add">
      <Buttons class="btn-input-todo"
               @click="">➕
      </Buttons>
    </div>
  </div>

  <div class="task-li">
    <p> {{}} </p>
  </div>
</template>

<script setup>

import Buttons from "@/components/UI/Buttons.vue";

</script>

<style scoped>
.btn-input-todo {
  background-color: rgba(36, 159, 149, 0.6);
  color: #044c4c;
  transition: all 0.7s ease;
  padding: 5px;
}

.btn-input-todo:hover {
  background-color: rgb(36, 159, 149);
}

</style>