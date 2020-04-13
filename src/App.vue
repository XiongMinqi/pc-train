<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
#app{
  position: absolute;
  background: #f2f2f2;
  width: 100%;
  height: 100%;
}
.content{
  background: #ffffff;
  min-width: 1000px;
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}
</style>