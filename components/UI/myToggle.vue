<template>
  <button class="toggle" @click="switchMode()">
    <lightIcon class="mode-icon light" v-if="props.mode == 'light'" />
    <nightIcon class="mode-icon night" v-else />
  </button>
</template>

<script setup>
import lightIcon from "@/public/icons/light.vue";
import nightIcon from "@/public/icons/night.vue";
const props = defineProps(["mode"]);
const emit = defineEmits(["switchMode"]);

const switchMode = () => {
  if (props.mode === "light") {
    emit('switchMode','night');
  } else {
    emit('switchMode','light');
  }
};
</script>

<style scoped>
.toggle {
  cursor: pointer;
  box-sizing: border-box;
  background-color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  width: 40px;
  height: 24px;
  border: 1px solid rgba(84, 84, 84, 0.65);
  border-radius: 20px;
}
.mode-icon {
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 1px rgba(0, 0, 0, 0) solid;
  border-radius: 100%;
}
.light {
  position: absolute;
  left: 1px;
}
.night {
  background-color: black;
  fill: azure;
  position: absolute;
  right: 1px;
}
</style>
