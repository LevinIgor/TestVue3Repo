<template>
  <div class="wrapper">
    <div class="title" ref="title1" @click="goToTitle(2)">Title 1</div>
    <div class="title" ref="title2" @click="goToTitle(3)">Title 2</div>
    <div class="title" ref="title3" @click="goToTitle(1)">Title 3</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

var title1 = ref(null);
var title2 = ref(null);
var title3 = ref(null);

const goToTitle = (number) => {
  number == 1 ? title1.value.scrollIntoView({ behavior: "smooth" }) : "";
  number == 2 ? title2.value.scrollIntoView({ behavior: "smooth" }) : "";
  number == 3 ? title3.value.scrollIntoView({ behavior: "smooth" }) : "";
};
</script>
<style scoped>
.wrapper {
  height: 3000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  color: aliceblue;
  font-size: 44px;
  margin-bottom: 1000px;
}
</style>
