<template>
  <div class="root">
    <MainNavbar />
    <div class="content">
      <Nuxt />
    </div>
    <footer>
      <p class="container">2021 webkaar studio. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar";

export default {
  components: {
    MainNavbar,
  },
};
</script>

<style lang="scss" scoped>
.root {
  min-height: 100vh;
  background-color: var(--clr-text-primary-dark);
  color: #fff;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
footer {
  .container {
    padding: 2rem 0;
    text-align: center;
    color: #888;
    @media (max-width: 860px) {
      font-size: 18px;
    }
  }
}
</style>
