<template>
  <div class="my-experience">
    <div class="header">Experience</div>
    <div class="blocks">
      <div class="block" v-for="block in blocks">
        <div class="block-title">Position: {{ block.title }}</div>
        <div class="block-company">
          Company:
          <a :href="block.companyUrl" target="_blank">{{ block.company }}</a>
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
.my-experience {
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
  flex-wrap: wrap;
  padding: 40px 0;
}
.block {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 400px;
  background-color: var(--second-bg-color);
  padding: 40px 60px;
}
.block-title {
  color: var(--font-color-green);
  font-size: 24px;
}
.block-company {
  color: var(--font-color-blue);
  font-size: 22px;
  margin-top: 10px;
}
.block-company a {
  color: var(--font-color-blue);
  transition: color 0.3s ease-in-out;
}
.block-company a:hover{
  color: var(--font-color-blue-active);
}
.block-text {
  margin-top: 30px;
  font-size: 20px;
  color: var(--font-color-white);
}
</style>
