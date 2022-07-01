<template>
  <div class="my-experience">
    <div class="header">Experience</div>
    <div class="blocks">
      <div class="block" v-for="block in blocks">
        <div class="block-title">Position: {{ block.title }}</div>
        <div class="block-company">
          Company: <a :href="block.companyUrl" target="_blank">{{ block.company }}</a>
        </div>
        <div class="block-text">
          {{ block.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const blocks = [
  {
    title: "Junior FrontEnd developer",
    company: "Apple",
    companyUrl: "https://www.apple.com/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, pariatur.",
  },
  {
    title: "Junior FrontEnd developer",
    company: "Apple",
    companyUrl: "https://www.apple.com/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, pariatur.",
  },
  {
    title: "Junior FrontEnd developer",
    company: "Apple",
    companyUrl: "https://www.apple.com/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, pariatur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, pariatur.",
  },
  {
    title: "Junior FrontEnd developer",
    company: "Apple",
    companyUrl: "https://www.apple.com/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, pariatur.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, pariatur.",
  },
  {
    title: "Junior FrontEnd developer",
    company: "Apple",
    companyUrl: "https://www.apple.com/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, pariatur.",
  },
];
</script>
<style scoped>
.my-experience{
padding-top: 100px;
}
.header {
  padding: 20px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.48);
  font-size: 44px;
  color: rgba(255, 255, 255, 0.87);
  font-family: "Inter", sans-serif;
}
.blocks {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0;
}
.block {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: aliceblue;
  width: 33%;
  height: 400px;
  background-color: #242424;
  padding: 40px 60px;
}
.block-title {
  color: #42b883;
  font-size: 24px;
}
.block-company {
  color: #aac8e4;
  font-size: 22px;
  margin-top: 10px;
}
.block-company a{
 text-decoration: none;
 color: #94aec6;
}
.block-text {
  margin-top: 30px;
  font-size: 20px;
}
</style>
