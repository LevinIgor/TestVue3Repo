<template>
  <footer>
    <span>Thanks to <a href="https://icons8.com/">icons8.com</a>  for the icons</span>
    <span>Thanks to <a href="https://coolors.co/">icons8.com</a>  for the colors</span>
  </footer>
</template>
<script>
export default {
  name: "MyFooter",
};
</script>
<style scoped>
footer{
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--font-color-white);
  margin-top: 100px;
  padding: 30px 20px;
  background-color: var(--second-bg-color);
}
span{
  margin-left: 30px;
}
</style>
