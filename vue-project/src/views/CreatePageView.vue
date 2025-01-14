<template>
  <div class="logo"><h2> Create Page </h2></div>

  <div class="main-container">
    <div class="my-style">
      <TodoCreate></TodoCreate>
    </div>
    <div class="btn-add">
      <router-link to="/">
        <Buttons>SAVE</Buttons>
      </router-link>
    </div>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import TodoCreate from "@/components/create/TodoCreate.vue";
import Buttons from "@/components/UI/Buttons.vue";

export default defineComponent({
  components: {Buttons, TodoCreate}
})
</script>
