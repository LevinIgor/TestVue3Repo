<template>
  <div
    class="parallaxCard"
    :style="[
      hover ? cardStyle : '',
      { 'background-image': `url(${props.card.backgroundUrl})` },
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    ref="target"
  >
    <img class="background" alt="" />
    <div class="title">
      <h1>
        {{ props.card.title }}
      </h1>
    </div>
    <div class="text">{{ props.card.text }}</div>
  </div>
</template>
<script setup>
import { ref, computed, reactive, watch } from "vue";
import { useParallax } from "@vueuse/core";

const props = defineProps(["card"]);
const hover = ref(false);
const target = ref(null);
const parallax = reactive(useParallax(target));
const cardStyle = computed(() => ({
  transform: `rotateX(${parallax.roll * 30}deg) rotateY(${
    parallax.tilt * 30
  }deg) scale(1.02) `,
  zIndex: "10",
}));
</script>
<style scoped>
.parallaxCard {
  box-sizing: border-box;
  display: flex;
  position: relative;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  transform-style: preserve-3d;
  /* filter: blur(10px); */
  height: 100%;
  width: 100%;
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.parallaxCard:hover .title {
  transform: translateY(-100px);
}
.title {
  align-self: center;
  padding: 20px;
  color: #42b883;
  transform-style: preserve-3d;
  transform: translateZ(100px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
</style>
