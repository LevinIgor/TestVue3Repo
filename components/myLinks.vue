<template>
  <div class="my-contact">
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
      <a class="link" target="_blank" :href="link.href" v-for="link in links">
        <img :src="link.iconSrc" alt="" />{{ link.name }}</a
      >
    </div>
  </div>
</template>
<script setup>
import { useClipboard } from "@vueuse/core";
const { copy } = useClipboard();

const links = [
  {
    name: "GitHub",
    iconSrc: "../public/icons/github.svg",
    href: "https://github.com/LevinIgor",
  },
  {
    name: "Telegram",
    iconSrc: "../public/icons/telegram.svg",
    href: "https://t.me/Levin_Ihor",
  },
  {
    name: "Linkedin",
    iconSrc: "../public/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/levin-igor/",
  },
  {
    name: "Viber",
    iconSrc: "../public/icons/viber.svg",
    href: "viber://chat?number=+380958318689",
  },
  {
    name: "Instagram",
    iconSrc: "../public/icons/instagram.svg",
    href: "https://www.instagram.com/levin_ihor/",
  },
  {
    name: "Email",
    iconSrc: "../public/icons/mail.svg",
    href: "mailto:lytghzys@gmail.com",
  },
];
</script>
<style scoped>
.my-contact {
  padding-top: 100px;
  color: var(--font-color-white);
}
.header {
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  font-size: 44px;
  color: var(--font-color-white);
  font-family: "Inter", sans-serif;
}
.contacts {
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
  font-size: large;
}
.contact {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
}
.contact::after {
  content: "Click to copy";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: var(--font-color-white);

  top: -60px;
  left: 10px;
  width: 200px;
  height: 50px;
  opacity: 0;
  background-color: var(--second-bg-color);
  transition: opacity 0.3s ease-in-out;
}
.contact:hover::after {
  opacity: 1;
}
.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 80px;
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
  padding: 10px 25px;
  margin: 10px;
  background-color: var(--second-bg-color);
  color: var(--font-color-green);
  transition: background-color 0.2s ease-in-out;
}
.link:hover {
  background-color: var(--second-bg-color-active);
}
</style>
