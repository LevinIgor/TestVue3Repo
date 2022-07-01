<template>
  <div class="projects">
    <div class="header">Projects</div>
    <div class="blocks">
      <div class="project" v-for="project in projects">
        <a :href="project.projectUrl" target="_blank">
          <img class="img" :src="project.imgUrl" :alt="project.name" />
        </a>
        <a :href="project.projectUrl" target="_blank" class="name">{{
          project.name
        }}</a>
        <span class="description">{{ project.description }}</span>
        <div class="tags">
          <span class="tag" v-for="tag in project.tags"> {{ tag }} </span>
        </div>
        <div class="links">
          <a :href="project.githubUrl" target="_blank"
            ><img class="icon" src="../public/icons/github.svg" alt="github"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const projects = [
  {
    name: "Geopardy",
    description:
      'The game is designed for several teams (ideally two). The goal is to score as many points as possible by answering questions of different categories (Similar: "Jeopardy", "Millionaire").',
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/geopardy.png?alt=media&token=96dbc445-fba0-4a9f-906c-4dcbe58e38a7",
    githubUrl: "https://github.com/LevinIgor/geopardy",
    projectUrl: "https://levinigor.github.io/geopardy/",
    tags: ["Vue", "Firebase", "Vuex", "Nuxt.js", "Transitions"],
  },
  {
    name: "CV in Vue3",
    description:
      'This is a CV in Vue3. It is a simple CV with a lot of features. It is a work in progress and is not finished yet.',
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/cv-Vue3.png?alt=media&token=4483a269-ae06-4f38-a0a1-e39b1f9ea654",
    githubUrl: "https://github.com/LevinIgor/TestVue3Repo",
    projectUrl: "https://levinigor.github.io/geopardy/",
    tags: ["Vue 3", "Vuex", "Composition API", "VueUse"],
  },
];
</script>
<style scoped>
.projects {
  padding-top: 100px;
}
.header {
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  font-size: 44px;
  color: var(--font-color-white);
  font-family: "Inter", sans-serif;
}
.blocks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
}
.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;

  font-size: 15px;
  border-radius: 10px;
  width: 450px;
  height: 510px;
  margin: 10px;
  padding: 20px;
  background-color: var(--second-bg-color);
}
.img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.name {
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
  font-size: 20px;
  color: var(--font-color-green);
  transition: color 0.4s;
}
.name:hover {
  color: var(--font-color-green-active);
}
.description {
  margin-top: 10px;
  font-size: 18px;
  color: var(--font-color-blue);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.tag {
  color: var(--font-color-white);
  margin-right: 10px;
}
.links {
  display: flex;
  align-items: center;
  justify-content: right;
}
.icon {
  cursor: pointer;
  filter: invert(70%);
  margin-left: 10px;
  transition: filter 0.3s;
}
.icon:hover {
  filter: invert(90%);
}
</style>
