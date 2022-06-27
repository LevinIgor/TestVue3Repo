<template>
  <div class="wrapper">
    <div class="card" ref="target" :style="cardStyle">
      <h1>Test text</h1>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import { useParallax } from "@vueuse/core";

const target = ref(null);
let parallax = reactive(useParallax(target));

const cardStyle = computed(() => ({
  background:
    "url(https://www.ckm.pl/files/2020_08/795126-mia-khalifa-1-6924dda625bd7273effa78c6b1ac8b9e_7dea4d.png)",
  height: "600px",
  width: "550px",
  borderRadius: "5px",
  border: "1px solid #cdcdcd",
  transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ",
  transform: `rotateX(${parallax.roll * 30}deg) rotateY(${
    parallax.tilt * 30
  }deg)`,
}));
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}
.card {
  transform-style: preserve-3d;
}
h1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: translateZ(100px);
}
</style>
