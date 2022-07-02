<template>
  <header>
    <div class="logo">
      <span> Curriculum vitae CV </span>
    </div>
    <div class="navbar">
      <div
        class="link"
        @click="scroll(link)"
        v-for="link in props.links"
        :class="{ active: props.currentPageBLock == link }"
      >
        {{ link }}
      </div>
      <a href="https://github.com/LevinIgor" target="_blank" class="github-icon">
        <img src="../public/icons/github.svg" alt="" />
      </a>
      <my-toggle class="link" />
    </div>
  </header>
</template>

<script setup>
import myToggle from "./myToggle.vue";

const emit = defineEmits(["scrollTo"]);
const props = defineProps(["currentPageBLock", "links"]);

const scroll = (link) => {
  emit("scrollTo", link);
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: var(--container-width);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid var(--border-color);
  padding: 10px 20px;
  background-color: var(--main-container-color);
}
.logo {
  font-family: "Inter", sans-serif;
  font-size: 30px;
  color: var(--font-color-green);
}

.github-icon {
  cursor: pointer;
  transition: all 0.2s;
  filter: invert(50%);
  width: 30px;
  height: 30px;
  margin-left: 50px;
}
.github-icon img {
  width: 100%;
  height: 100%;
}
.github-icon:hover {
  filter: invert(90%);
}
.navbar {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 500px;
}
.link {
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: all 0.2s;
  color: var(--font-color-white);
  user-select: none;
  padding: 5px 20px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
}
.active {
  border-bottom: 2px solid var(--font-color-green);
}
.link:hover {
  color: var(--font-color-green);
}
</style>
