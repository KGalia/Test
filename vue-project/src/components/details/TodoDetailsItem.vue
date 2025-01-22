<template>
  <div class="details-item">
    <input
        v-model="props.item.done"
        @click="toggleTaskClass()"
        :key="props.item.id"
        type="checkbox"
        :checked="props.item.done"
        class="checkbox-label"
    />
    <label
        :for="item.id"
        :class="{text_list_isShow: props.item.done}"
    >
      <p @click="toggleTaskClass()">
        {{ props.item.name }} </p>
    </label>

    <div class="btn-add">
      <Buttons @click="deleteTask(props.items.id)"
               class="btn-del"> ❌
      </Buttons>
    </div>
  </div>

</template>

<script setup>
import Buttons from "@/components/UI/Buttons.vue";
import { reactive, computed } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  items: {
    type: Array,
    required:true
  }
});

const toggleTaskClass = () => {
  props.item.done = !props.item.done;
};

const itemsNew = reactive(props.items)

const deleteTask = computed((id) =>
 itemsNew.filter(item => item.id !== id))

// const deleteTask = (id) => {
//   itemsNew = itemsNew.filter(item => item.id !== id);
// }

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
