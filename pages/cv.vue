<template>
  <div class="container">
    <my-header @scroll="scrollTo($event)" />
    <my-info ref="information" />
    <my-projects ref="projects" />
    <my-experience ref="experience" />
    <my-links ref="contacts" />
    <my-footer />
  </div>
</template>

<script setup>
import MyHeader from "@/components/myHeader.vue";
import MyInfo from "@/components/myInfo.vue";
import MyProjects from "@/components/myProjects.vue";
import myExperience from "@/components/myExperience.vue";
import MyLinks from "@/components/myLinks.vue";
import MyFooter from "@/components/myFooter.vue";

import { ref } from "vue";

const projects = ref(null);
const contacts = ref(null);
const information = ref(null);
const experience = ref(null);

const scrollTo = async (element) => {
  element == "Information"
    ? information.value.$el.scrollIntoView({ behavior: "smooth" })
    : "";
  element == "Projects"
    ? projects.value.$el.scrollIntoView({ behavior: "smooth" })
    : "";
  element == "Contacts"
    ? contacts.value.$el.scrollIntoView({ behavior: "smooth" })
    : "";
  element == "Experience"
    ? experience.value.$el.scrollIntoView({ behavior: "smooth" })
    : "";
};
</script>

<style scoped>
.container {
  top: 0;
  margin: 0 auto;
  box-sizing: content-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  width: 1500px;
  background-color: #1a1a1a;
  border-left: 1px solid rgba(84, 84, 84, 0.48);
  border-right: 1px solid rgba(84, 84, 84, 0.48);
}
</style>
