<template>

  <InputCreateTitle/>

  <TodoCreateItems/>

  <div class="btn-add">
    <router-link to="/">
      <Buttons>SAVE</Buttons>
    </router-link>
  </div>

</template>

<script setup>

import InputCreateTitle from "@/components/create/InputCreateTitle.vue";
import Buttons from "@/components/UI/Buttons.vue";
import TodoCreateItems from "@/components/create/TodoCreateItems.vue";

</script>

<style scoped>


</style>