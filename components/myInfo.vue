<template>
  <div class="info">
    <div class="header">Technology stack</div>
    <div class="blocks">
      <parallax-card v-for="block in blocks" :card="block" class="block" />|
    </div>
    <div class="text">
      <span class="text-title">Details</span>
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
    title: "Vitest",
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/VITEST.jpg?alt=media&token=fb555bda-5cdc-4d83-8e82-6505048e78fd",
    text: "",
  },
  {
    title: "Axios",
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/axios.jpg?alt=media&token=fa2c66e4-9230-4c03-835e-c5bac33524eb",
    text: "",
  },
];
const textBlocks = [
  {
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
    color: "#184e77",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/typescript.png?alt=media&token=dcf1c68f-d699-4049-95e0-dd6418e2a653",
  },
  {
    title: "Composition API",
    url: "https://vuejs.org/api/",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/vue.png?alt=media&token=f1406576-665c-483b-bae1-eeff08eee918",
    color: "#333d29",
  },
  {
    title: "Options API",
    url: "https://vuejs.org/api/",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/vue.png?alt=media&token=f1406576-665c-483b-bae1-eeff08eee918",
    color: "#333d29",
  },
  {
    title: "Nuxt js",
    url: "https://nuxtjs.org/",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/vue.png?alt=media&token=f1406576-665c-483b-bae1-eeff08eee918",
    color: "#333d29",
  },
  {
    title: "Vue Router",
    url: "https://router.vuejs.org/",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/vue.png?alt=media&token=f1406576-665c-483b-bae1-eeff08eee918",
    color: "#333d29",
  },
  {
    title: "VueX",
    url: "https://vuex.vuejs.org/",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/vue.png?alt=media&token=f1406576-665c-483b-bae1-eeff08eee918",
    color: "#333d29",
  },
  {
    title: "VueUse",
    url: "https://vueuse.org/",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/vue.png?alt=media&token=f1406576-665c-483b-bae1-eeff08eee918",
    color: "#333d29",
  },
  {
    title: "Sass",
    url: "https://sass-lang.com/",
    color: "",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/sass.png?alt=media&token=4e765a2b-6a3f-493f-b0b6-c7bb60833284",
      color: "#590d22",
  },
  {
    title: "ESLint",
    url: "https://eslint.org/",
    color: "",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/javascript.png?alt=media&token=12ca187c-ea5b-4e97-a816-bf223a3edc23",
      color:'#604c06'
  },
  {
    title: "Prettier ",
    url: "https://prettier.io/",
    color: "",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/javascript.png?alt=media&token=12ca187c-ea5b-4e97-a816-bf223a3edc23",
      color:'#604c06'
  },
  {
    title: "Babel ",
    url: "https://babeljs.io/",
    color: "",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/javascript.png?alt=media&token=12ca187c-ea5b-4e97-a816-bf223a3edc23",
      color:'#604c06'
  },
  {
    title: "Bootstrap",
    url: "https://bootstrap-vue.org/",
    color: "#390099",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/bootstrap.png?alt=media&token=b3284492-a39c-4c3a-b1fd-54109706be89",
  },
  {
    title: "Github Pages",
    url: "https://pages.github.com/",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/github.png?alt=media&token=b2a5dfb3-dd77-4733-bbcf-9bb5bfd03c5a",
      color:'#390099'
  },
  {
    title: "Firebase Auth",
    url: "https://firebase.google.com/docs/auth",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/firebase.png?alt=media&token=23c061e4-5553-4f6f-ad0a-5d816f28df12",
      color:'#604c06'
  },
  {
    title: "Firebase Cloud Firestore",
    url: "https://firebase.google.com/docs/firestore",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/firebase.png?alt=media&token=23c061e4-5553-4f6f-ad0a-5d816f28df12",
      color:'#604c06'
  },
  {
    title: "Firebase Storage",
    url: "https://firebase.google.com/docs/storage",
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/dossier-cda53.appspot.com/o/firebase.png?alt=media&token=23c061e4-5553-4f6f-ad0a-5d816f28df12",
      color:'#604c06'
  },
];

const getRandomColor = () => {
  // const colors = [
  //   "#f72585",
  //   "#b5179e",
  //   "#7209b7",
  //   "#560bad",
  //   "#480ca8",
  //   "#3a0ca3",
  //   "#3f37c9",
  //   "#4361ee",
  //   "#4895ef",
  //   "#4cc9f0",
  // ];
  const colors = [
    "#0b2c24",
    "#247a4d",
    "#0f392b",
    "#206d46",
    "#134632",
    "#1c603f",
    "#185339",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
</script>
<style scoped>
.header {
  font-size: 40px;
  color: rgba(255, 255, 255, 0.87);
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

.text{
  margin-top: 40px;
}
.text-title {
  padding: 20px;
  margin-top: 40px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.48);
  font-size: 40px;
  color: rgba(255, 255, 255, 0.87);
}
.text-blocks {
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.87);
}
.text-block {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.87);
  border: 1px solid rgba(255, 255, 255, 0.308);
  border-radius: 10px;
  margin: 10px 20px;
  padding: 10px 30px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
}
.text-block img {
  margin-right: 10px;
}
.text-block:hover {
  background-color: rgba(26, 255, 1, 0.056) !important;
  transform: scale(1.01);
}
</style>
