<template>
  <my-message :title="'test title'" :text="'test text'" ref="message" />
  <div class="container">
    <my-header @scrollTo="scrollTo($event)" :currentPageBLock="currentTitle" :links="navLinks" />
    <my-info ref="information" v-intersection="'Information'" />
    <my-projects ref="projects" v-intersection="'Projects'" />
    <my-experience ref="experience" v-intersection="'Experience'" />
    <my-links ref="contacts" v-intersection="'Contacts'" />
    <my-footer />
    <div class="test">11111111111</div>
  </div>
</template>

<script setup>
import MyHeader from "@/components/myHeader.vue";
import MyInfo from "@/components/myInfo.vue";
import MyProjects from "@/components/myProjects.vue";
import myExperience from "@/components/myExperience.vue";
import MyLinks from "@/components/myLinks.vue";
import MyFooter from "@/components/myFooter.vue";
import myMessage from "@/components/myMessage.vue";

import { ref } from "vue";

const projects = ref(null);
const contacts = ref(null);
const information = ref(null);
const experience = ref(null);
const message = ref(null);

const currentTitle = ref("Information");
const navLinks = ["Information", "Projects", "Experience", "Contacts"];

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

// При пересечении блока, задаем как тот который сейчас просматривается. Нужно для отображения в меню.
const vIntersection = {
  mounted: ($el, binding) => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        currentTitle.value = binding.value;
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe($el);
  },
};
</script>

<style scoped>
.container {
  top: 0;
  margin: 0 auto;
  box-sizing: content-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  width: var(--container-width);
  background-color: var(--main-container-color);
  border-left: 1px solid rgba(84, 84, 84, 0.48);
  border-right: 1px solid rgba(84, 84, 84, 0.48);
}
</style>
