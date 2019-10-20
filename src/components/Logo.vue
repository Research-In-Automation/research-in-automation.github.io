<template>
  <div class="logo">
    <p class="research">Research</p>
    <p>in Automation</p>
  </div>
</template>

<style scoped>
.logo {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  line-height: 1;
}

.logo p {
  margin: 0;
}

.research::before {
  content: '';
  position: absolute;
  background-color: yellow;
  margin-left: -10px;
  margin-top: -5px;
  width: 210px;
  height: 65px;
  z-index: -99999;
}
</style>