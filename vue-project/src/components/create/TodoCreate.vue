<template>

  <InputCreateTitle/>

  <TodoCreateItems/>

  <div class="btn-add">
    <router-link to="/">
      <Buttons>SAVE</Buttons>
    </router-link>
  </div>

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


</style>