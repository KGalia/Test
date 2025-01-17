<template>
  <main>
    <div class="logo"><h2> My to-do list </h2></div>

    <div class="my-style">
      <TodoList/>

      <div class="btn-add">

        <router-link to="/create-page">
          <Buttons>ADD</Buttons>
        </router-link>

      </div>

    </div>

  </main>
</template>

<script setup>
import TodoList from "@/components/main/TodoList.vue";
import Buttons from "@/components/UI/Buttons.vue";

</script>
