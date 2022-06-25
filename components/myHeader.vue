<template>
  <header>
    <div class="logo">
      <span> Levin Ihor </span>
    </div>
    <div class="navbar">
      <div class="link">Info</div>
      <div class="link">Projects</div>
      <div class="link">Links</div>
      <div class="link">Footer</div>
      <my-toggle />
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style scoped>
.logo {
  font-size: 40px;
}
img {
  width: 100%;
  height: 100%;
  contain: cover;
}
header {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
}
.navbar {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.link{
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  background-color: #000;
  cursor: pointer;
}
</style>
