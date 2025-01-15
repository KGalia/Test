<template>

  <div class="task-item">
    <InputCreateItems/>
  </div>

  <div class="task-li">
    Список дел
  </div>
</template>

<script>
import InputCreateItems from "@/components/create/InputCreateItems.vue";

export default {
  components: {InputCreateItems}
}

</script>

<style scoped>
</style>