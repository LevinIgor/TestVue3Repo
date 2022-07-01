<template>
  <test ref="testRef" />
</template>
<script setup>
import test from "../components/test.vue";
import { ref, onMounted } from "vue";

const testRef = ref(null);

onMounted(() => {
    console.log(testRef.value.$el);
});
</script>
<style scoped></style>
