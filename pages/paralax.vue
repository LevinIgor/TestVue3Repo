<template>
  <div class="wrapper">
    <div class="perspective">
      <div class="card" ref="container">
        <div class="card-bg"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useParallax } from "@vueuse/core";
import {reactive,ref, computed} from 'vue'

const container = ref(null);
const parallax = reactive(useParallax(container));



</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.perspective {
  width: 100%;
  perspective: 1200px;
}
.card:hover {
  transform: rotateY(20deg) rotateX(20deg);
}
.card {
  width: 600px;
  height: 650px;
  margin: auto;
  transform-style: preserve-3d;
  transition: transform 0.5s linear;
}
.card-bg {
  background-size: cover;
  background-image: url(https://www.ckm.pl/files/2020_08/795126-mia-khalifa-1-6924dda625bd7273effa78c6b1ac8b9e_7dea4d.png);
  height: 100%;
  width: 100%;
  border-radius: 15px;
}
</style>
