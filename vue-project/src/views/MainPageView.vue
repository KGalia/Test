<template>
  <main>
    <div class="logo"><h1> My to-do list </h1></div>

    <div class="my-style">
      <TodoList/>

      <div class="btn-add">

        <Buttons>
          <router-link to="/create-page">➕</router-link>
        </Buttons>
      </div>

    </div>

  </main>
</template>

<script>
import TodoList from "@/components/main/TodoList.vue";
import Buttons from "@/components/UI/Buttons.vue";

export default {
  name: 'MainPage',
  components: {TodoList, Buttons},
}
</script>
