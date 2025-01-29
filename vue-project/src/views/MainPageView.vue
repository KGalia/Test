<template>
  <main>
    <div class="logo"><h2> My to-do list </h2></div>

    <div class="my-style">
      <TodoList/>

      <div class="btn-add">

        <router-link to="/create-page">
          <Buttons class="btn-add-task">ADD</Buttons>
        </router-link>

      </div>

    </div>

  </main>
</template>

<script setup>
import TodoList from "@/components/main/TodoList.vue";
import Buttons from "@/components/UI/Buttons.vue";

</script>

<style scoped>
.btn-add-task {
  background-color: rgb(20, 172, 159);
  color: #f6f7f8;
  font-size: 14px;
  transition: all 0.7s ease;
  padding: 5px 15px;
  margin: 5px 5px;
}

.btn-add-task:hover {
  background-color: rgb(5, 101, 101);
}
</style>
