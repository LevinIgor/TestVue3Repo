<template>
  <div class="message" v-if="show">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script setup>
const show = false

const hide = () =>{
    show = false
}
</script>
<style scoped>
.message{
    position: fixed;
    top:100px;
    right: 100px;

    width: 200px;
    height: 100px;
    background-color: #fff;

    z-index: 100;
}
</style>
