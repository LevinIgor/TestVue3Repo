<template>
  <header>
    <div class="logo">
      <span> Curriculum vitae CV </span>
    </div>
    <div class="navbar">
      <div class="link" @click="emit('scroll', link)" v-for="link in links">
        {{ link }}
      </div>

      <svg
        class="github-icon"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        ></path>
      </svg>
      <my-toggle class="link" />
    </div>
  </header>
</template>

<script setup>
import myToggle from "./myToggle.vue";

const emit = defineEmits(["scroll"]);
const links = ["Information", "Projects","Experience", "Contacts", ];
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
  width: 25px;
  height: 25px;
  margin-left: 50px;
}
.github-icon:hover {
  filter: invert(100%);
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
  
}
.link:hover {
  color: var(--font-color-green);
}
</style>
