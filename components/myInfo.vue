<template>
  <div class="info">
    <div class="header">Technology stack</div>
    <div class="blocks">
      <parallax-card v-for="block in blocks" :card="block" class="block" />|
    </div>
    <div class="text">
      <h1 class="title">Other...</h1>
      <div class="text-blocks">
        <div class="text-block">
          
        </div>
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
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/JS.jpg?alt=media&token=1ec07b5a-bd84-4526-bfd9-25acd3c4aedc",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe maxime beatae sunt ut impedit ullam eum odit excepturi voluptas.",
  },
  {
    title: "VueJs",
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/VUE.jpg?alt=media&token=d7919401-2de6-4e07-8a5e-3e6c3421de9b",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe maxime beatae sunt ut impedit ullam eum odit excepturi voluptas.",
  },
  {
    title: "Firebase",
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/FIREBASE.jpg?alt=media&token=d09aa969-80cc-402d-b7d9-1e7058dff99c",
    text: "",
  },
  {
    title: "Github",
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/GITHUB.jpg?alt=media&token=48c0bb09-c68a-4e62-9eaa-55421d795945",
    text: "",
  },
  {
    title: "Test",
    backgroundUrl: "",
    text: "",
  },
  {
    title: "Test",
    backgroundUrl: "",
    text: "",
  },
];
</script>
<style scoped>
.header {
  font-size: 40px;
  color: rgba(255, 255, 255, .87);
  padding: 20px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.48);
  margin-top: 100px;
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
</style>
