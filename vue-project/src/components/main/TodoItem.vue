<template>
  <div class="task-item">
    <input
        type="checkbox"
        :id="item.id"
        :checked="item.done"
        class="checkbox-label"
    />
    <label
        :for="item.id"
        :class="{text_list_isShow:item.done }"
    >
     <p> {{ item.name }} </p>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
});
</script>
