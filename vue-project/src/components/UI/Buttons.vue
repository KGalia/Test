<template>

  <button>

<slot></slot>

  </button>

</template>

<script>
export default {
name: 'buttons',
}
</script>

<style scoped>

button {
  border-radius: 5px;
  background-color: rgba(36, 159, 149, 0.6);
  border: 1px solid #ccc;
  padding: 10px 35px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: rgb(36, 159, 149);
}

</style>