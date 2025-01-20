<template>
  <div class="details-item">
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

 <div class="btn-add">
   <Buttons class="btn-del"> ❌ </Buttons>
 </div>
  </div>

</template>

<script setup>
import Buttons from "@/components/UI/Buttons.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
});
</script>

<style scoped>
.btn-del {
  background-color: rgb(255, 254, 254);
  color: #fffefe;
  transition: all 0.7s ease;
  padding: 2px;
  margin: 5px 0 5px 35px;
  font-size: 12px;
}

.btn-del:hover {
  background-color: rgb(250, 208, 208);
}

.details-item {
  display: flex;
  align-items: center;
  margin: 0 5px 0 5px;
}

</style>
