<template>
  <div class="header">My links</div>
  <div class="links">
    <a class="link" href="https://t.me/Levin_Ihor">
      <img src="../public/icons/telegram.svg" alt="" />Telegram</a
    >

    <div class="link">
      <img src="../public/icons/telegram.svg" alt="" />
      <span class="name">LinkedLn</span>
    </div>
    <div class="link">
      <img src="../public/icons/telegram.svg" alt="" />
      <span class="name">Viber</span>
    </div>
    <div class="link">
      <img src="../public/icons/telegram.svg" alt="" />
      <span class="name">Instagram</span>
    </div>
    <div class="link">
      <img src="../public/icons/telegram.svg" alt="" />
      <span class="name">Gmail</span>
    </div>
    <div class="link">
      <img src="../public/icons/telegram.svg" alt="" />
      <span class="name">Telegram</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyLinks",
};
</script>
<style scoped>
.header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.87);
  font-size: 44px;
  color: rgba(255, 255, 255, 0.87);
}
.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 100%;
}

.link img {
  width: 35px;
  height: 35px;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  background-color: #242424;
  color: #42b883;
}
</style>
