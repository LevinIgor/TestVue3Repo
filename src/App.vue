<template>
  <div id='app'>
    <router-view> </router-view>
  </div>
</template>
<script></script>

<style>
*{
    margin: 0;
    padding: 0;
}
#app{
    width: 100%;
    height: 100vh;
}
::-webkit-scrollbar {
  width: 0;
}
body {
	background: linear-gradient(-45deg, #464646, #D54E21, #21759B, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
	}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
