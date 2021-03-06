<template>
  <div class="info">
    <div class="header">Technology stack</div>
    <div class="blocks">
      <parallax-card v-for="block in blocks" :card="block" class="block" />|
    </div>
    <div class="text">
      <div class="text-title">Skills</div>
      <div class="text-blocks">
        <a
          v-for="textBlock in textBlocks"
          :href="textBlock.url"
          target="_blank"
          class="text-block"
          :style="{ 'background-color': `${textBlock.color}` }"
        >
          <img :src="textBlock.iconUrl" alt="" />
          {{ textBlock.title }}
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import parallaxCard from "./parallaxCard.vue";

const blocks = [
  {
    title: "JavaScript",
    backgroundUrl:
      "../public/img/JS.jpg",
    text: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.",
  },
  {
    title: "Vue.js",
    backgroundUrl:
      "../public/img/Vue.jpg",
    text: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members",
  },
  {
    title: "Vitest",
    backgroundUrl:
      "../public/img/Vitest.jpg",
    text: "Vitest is a blazing fast unit test framework powered by Vite.",
  },
  {
    title: "Axios",
    backgroundUrl:
      "../public/img/Axios.jpg",
    text: "Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.",
  },
  {
    title: "Github",
    backgroundUrl:
      "../public/img/Github.jpg",
    text: "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration, and wikis for every project.",
  },
  {
    title: "Firebase",
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/FIREBASE.jpg?alt=media&token=d09aa969-80cc-402d-b7d9-1e7058dff99c",
    text: "Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform[1] and it is now their flagship offering for app development.",
  },
];
const textBlocks = [
  {
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
    color: "#184e77",
    iconUrl:
      "../public/icons/typescript.png",
  },
  {
    title: "Composition API",
    url: "https://vuejs.org/api/",
    iconUrl:
      "../public/icons/vue.png",
    color: "#333d29",
  },
  {
    title: "Options API",
    url: "https://vuejs.org/api/",
    iconUrl:
      "../public/icons/vue.png",
    color: "#333d29",
  },
  {
    title: "Nuxt.js",
    url: "https://nuxtjs.org/",
    iconUrl:
      "../public/icons/vue.png",
    color: "#333d29",
  },
  {
    title: "Vue Router",
    url: "https://router.vuejs.org/",
    iconUrl:
      "../public/icons/vue.png",
    color: "#333d29",
  },
  {
    title: "VueX",
    url: "https://vuex.vuejs.org/",
    iconUrl:
      "../public/icons/vue.png",
    color: "#333d29",
  },
  {
    title: "VueUse",
    url: "https://vueuse.org/",
    iconUrl:
      "../public/icons/vue.png",
    color: "#333d29",
  },
  {
    title: "Vue-CLI",
    url: "https://cli.vuejs.org/",
    iconUrl:
      "../public/icons/vue.png",
    color: "#333d29",
  },
  {
    title: "Sass",
    url: "https://sass-lang.com/",
    color: "",
    iconUrl:
      "../public/icons/sass.png",
    color: "#590d22",
  },
  {
    title: "ESLint",
    url: "https://eslint.org/",
    color: "",
    iconUrl:
      "../public/icons/javascript.png",
    color: "#604c06",
  },
  {
    title: "Prettier ",
    url: "https://prettier.io/",
    color: "",
    iconUrl:
      "../public/icons/javascript.png",
    color: "#604c06",
  },
  {
    title: "Babel ",
    url: "https://babeljs.io/",
    color: "",
    iconUrl:
      "../public/icons/javascript.png",
    color: "#604c06",
  },
  {
    title: "Bootstrap",
    url: "https://bootstrap-vue.org/",
    color: "#390099",
    iconUrl:
      "../public/icons/bootstrap.png",
  },
  {
    title: "Github Pages",
    url: "https://pages.github.com/",
    iconUrl:
      "../public/icons/github.png",
    color: "#390099",
  },
  {
    title: "Firebase Auth",
    url: "https://firebase.google.com/docs/auth",
    iconUrl:
      "../public/icons/firebase.png",
    color: "#604c06",
  },
  {
    title: "Firebase Cloud Firestore",
    url: "https://firebase.google.com/docs/firestore",
    iconUrl:
      "../public/icons/firebase.png",
    color: "#604c06",
  },
  {
    title: "Firebase Storage",
    url: "https://firebase.google.com/docs/storage",
    iconUrl:
      "../public/icons/firebase.png",
    color: "#604c06",
  },
  {
    title: "Vercel",
    url: "https://firebase.google.com/docs/storage",
    iconUrl:
      "../public/icons/firebase.png",
    color: "#604c06",
  },
];
</script>
<style scoped>
.header {
  font-size: 40px;
  color: var(--font-color-white);
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-top: 100px;
  padding-bottom: 40px;
  font-family: "Inter", sans-serif;
}
.blocks {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  perspective: 1000px;
}
.block {
  width: 500px;
  height: 500px;
}

.text {
  margin-top: 40px;
}
.text-title {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin-top: 40px;
  border-bottom: 1px solid var(--border-color);
  font-size: 40px;
  color: var(--font-color-white);
}
.text-blocks {
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
  font-size: 20px;
}
.text-block {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: medium;
  text-decoration: none;
  color: var(--font-color-white);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin: 5px 10px;
  padding: 5px 15px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
}
.text-block img {
  margin-right: 10px;
}
.text-block:hover {
  color:var(--font-color-white-active);
}
</style>
