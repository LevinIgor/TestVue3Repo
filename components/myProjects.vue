<template>
  <div class="projects">
    <div class="header">Projects</div>
    <div class="blocks">
      <div class="project" v-for="project in projects">
        <img class="img" :src="project.imgUrl" :alt="project.name" />
        <a :href="project.projectUrl" target="_blank" class="name">{{
          project.name
        }}</a>
        <span class="description">{{ project.description }}</span>
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
      'The game is designed for several teams (ideally two). The goal is to score as many points as possible by answering questions of different categories (Similar: "Jeopardy", "Millionaire"). The game requires at least two teams and a leader. The team chooses a category question with any desired price, as soon as either team is ready to answer, it can do so, the presenter checks the answers and decides on the correctness of the answer',
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/geopardy.png?alt=media&token=96dbc445-fba0-4a9f-906c-4dcbe58e38a7",
    githubUrl: "https://github.com/LevinIgor/geopardy",
    projectUrl: "https://levinigor.github.io/geopardy/",
  },
  {
    name: "",
    description: "",
    imgUrl: "",
    githubUrl: "",
    projectUrl: "",
  },
  { name: "", description: "", imgUrl: "", githubUrl: "", projectUrl: "" },
];
</script>
<style scoped>
.header {
  padding: 20px;
  margin-top: 40px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.48);
  font-size: 44px;
  color: rgba(255, 255, 255, 0.87);
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
  box-sizing: border-box;
  overflow: hidden;

  font-size: 15px;
  border-radius: 10px;
  width: 450px;
  margin: 10px;
  padding: 20px;
  background-color: #242424;
  backdrop-filter: blur(5px);
}
.img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.name {
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
  font-size: 20px;
  color: #42b883;
  transition: color 0.4s;
}
.name:hover {
  color: #48e19c;
}
.description {
  margin-top: 10px;
  font-size: 18px;
  color: #aac8e4;
}
.links {
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 30px;
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
