<template>
  <div class="header">Contacts</div>
  <div class="contacts">
    <div class="contact" @click="copy('+380958318689')">
      <img src="../public/icons/phone.png" alt="" />
      <span class="value">+380958318689</span>
    </div>
    <div class="contact" @click="copy('lytghzys@gmail.com')">
      <img src="../public/icons/mail.svg" alt="" />
      <span class="value">lytghzys@gmail.com</span>
    </div>
  </div>
  <div class="links">
    <a class="link" target="_blank" href="https://github.com/LevinIgor">
      <img src="../public/icons/github.svg" alt="" />GitHub</a
    >
    <a class="link" target="_blank" href="https://t.me/Levin_Ihor">
      <img src="../public/icons/telegram.svg" alt="" />Telegram</a
    >
    <a
      class="link"
      target="_blank"
      href="https://www.linkedin.com/in/levin-igor/"
    >
      <img src="../public/icons/linkedin.svg" alt="" />Linkedin</a
    >
    <a class="link" target="_blank" href="viber://chat?number=+380958318689">
      <img src="../public/icons/viber.svg" alt="" />Viber</a
    >
    <a
      class="link"
      target="_blank"
      href="https://www.instagram.com/levin_ihor/"
    >
      <img src="../public/icons/instagram.svg" alt="" />Instagram</a
    >
    <a class="link" target="_blank" href="mailto:lytghzys@gmail.com">
      <img src="../public/icons/mail.svg" alt="" />Email</a
    >
  </div>
</template>
<script setup>
import { useClipboard } from "@vueuse/core";
const { copy } = useClipboard();
</script>
<style scoped>
.header {
  margin-top: 40px;
  padding: 20px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.48);
  font-size: 44px;
  color: rgba(255, 255, 255, 0.87);
}
.contacts {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  color: rgba(255, 255, 255, 0.87);
  font-size: large;
}
.contact {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 100%;
}

img {
  width: 35px;
  height: 35px;
  filter: invert(90%);
  margin-right: 10px;
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
