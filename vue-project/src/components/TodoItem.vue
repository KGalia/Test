<template>
  <div>
    <input type="checkbox" :id="item.id" :checked="item.done"/>
    <label :for="item.id" :class="{text_list_isShow:item.done }">{{ item.name }}</label>
  </div>
</template>

<script>
export default {
  props:{
    item:{type: Object,required: true},
  }
}
</script>
