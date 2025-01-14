<template>

  <InputCreateTitle></InputCreateTitle>



  <div class="task-item">
    <InputCreateItems/>

    <div class="btn-add">
      <Buttons class="btn-input-todo">➕</Buttons>
    </div>
  </div>

  <TodoCreateItems/>

</template>

<script>
import InputCreateTitle from "@/components/create/InputCreateTitle.vue";
import Buttons from "@/components/UI/Buttons.vue";
import TodoCreateItems from "@/components/create/TodoCreateItems.vue";
import InputCreateItems from "@/components/create/InputCreateItems.vue";

export default {
  components: {InputCreateItems, TodoCreateItems, Buttons, InputCreateTitle}
}
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