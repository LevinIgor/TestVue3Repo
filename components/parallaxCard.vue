<template>
  <div
    class="parallaxCard"
    ref="target"
    :style="[
      hover ? cardStyle : '',
      { 'background-image': `url(${props.card.backgroundUrl})` },
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="content-card">
      <h1 class="title">
        {{ props.card.title }}
      </h1>

      <div class="text">{{ props.card.text }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, reactive } from "vue";
import { useParallax } from "@vueuse/core";

const props = defineProps(["card"]);
const hover = ref(false);
const target = ref(null);
const parallax = reactive(useParallax(target));
const cardStyle = computed(() => ({
  transform: `rotateX(${parallax.roll * 40}deg) rotateY(${
    parallax.tilt * 40
  }deg) scale(1.03)`,
  zIndex: "10",
}));
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.parallaxCard {
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  position: relative;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
  filter: grayscale(.9);
}
.content-card {
  box-sizing: border-box;
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: var(--font-color-green);
}
.title {
  font-size: 44px;
  margin: 0 auto;
  transform: perspective(2000px) translateY(200px) translateZ(500px);
  transition: transform 1s;
}
.parallaxCard:hover .title {
  transform: translateY(100px);
}

.parallaxCard:hover{
  filter: grayscale(0);
}
.text {
  box-sizing: border-box;
  position: absolute;
  transition: all 1s ease-in-out;
  left: 0;
  bottom: -300px;
  height: 300px;
  padding: 20px;
  font-size: large;
  color: var(--font-color-blue);
  background-color: var(--second-bg-color);
}
.parallaxCard:hover .text {
  bottom: -100px;
}
</style>
