<template>
  <div id='app'>
    <router-view> </router-view>
  </div>
</template>
<script></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
@import '../public/style/main.css';

*{
    margin: 0;
    padding: 0;
}
#app{  
    font-family: 'Roboto', sans-serif;
}
::-webkit-scrollbar {
  width: 0;
}
body{
	background-color: var(--main-bg-color);
}
</style>
