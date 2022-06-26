<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useParallax } from "@vueuse/core";

const target = ref(null);

const parallax = reactive(useParallax(target));

const cardStyle = computed(() => ({
  background: "#fff",
  height: "20rem",
  width: "15rem",
  borderRadius: "5px",
  border: "1px solid #cdcdcd",
  overflow: "hidden",
  transition: ".3s ease-out all",
  boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.25)",
  transform: `rotateX(${parallax.roll * 100}deg) rotateY(${
    parallax.tilt * 100
  }deg)`,
}));
</script>

<template>
  <div>
    <div ref="target" class="targetStyle">
      <div class="containerStyle">
        <div :style="cardStyle"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.targetStyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 1000px;
  transition: .3s ease-out all;
}
.containerStyle {
  margin: 3em auto;
  perspective: 300px;
}
</style>
