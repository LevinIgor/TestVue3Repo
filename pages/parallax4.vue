<template>
  <div class="wrapper" >
    <div class="card" ref="target" :style="cardStyle"></div>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import { useParallax } from "@vueuse/core";

const target = ref(null);

const parallax = reactive(useParallax(target));

const cardStyle = computed(() => ({

  background: "url(https://www.ckm.pl/files/2020_08/795126-mia-khalifa-1-6924dda625bd7273effa78c6b1ac8b9e_7dea4d.png)",
  height: "600px",
  width: "550px",
  borderRadius: "5px",
  border: "1px solid #cdcdcd",
  overflow: "hidden",
  transition: "1s ease-out all",
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,
}));
</script>
<style scoped>
.wrapper {
    perspective: 300px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
