<template lang="">
  <div class="navbar">
    <div
      @click="$router.push('/')"
      style="color: teal; font-size: 24px; font-weight: bold"
    >
      Vue 3
    </div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left: 10px" @click="$router.push('/about')"
        >Информация о ...</my-button
      >

      <my-button style="margin-left: 10px" @click="$router.push('/store')"
        >Store</my-button
      >
      <my-button style="margin-left: 10px" @click="$router.push('/composition')"
        >Composition</my-button
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  height: 50px;
  background-color: rgba(19, 189, 189, 0.332);
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
