<template>
  <div>
    <MainNavbar />
    <Nuxt />
    <footer>
      <p class="container">2021 webkaar studio. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar";

export default {
  components: {
    MainNavbar
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 10rem;
  background-color: #e5e5e5;
  .container {
    padding: 2rem 0;
    text-align: center;
    @media (max-width: 860px) {
      font-size: 18px;
    }
  }
}
</style>
