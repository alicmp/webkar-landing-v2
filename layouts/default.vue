<template>
  <div id="top">
    <MainNavbar />
    <Nuxt />
    <section class="contact px-l">
      <div class="container anim">
        <h3 class="mb-title">Contact</h3>
        <div class="text">
          <p>
            If you want to get in touch or if want to know more, please contact
            us <a href="mailto:hatami.sahar.91@gmail.com">hatami.sahar.91@gmail.com</a>
          </p>
        </div>
        <div class="socials">
          <a href="https://www.linkedin.com/in/sahar-hatami/"
            ><img src="@/assets/img/icon/in.png" alt="sahar's linkedin"
          /></a>
        </div>
      </div>
    </section>

    <section class="back-to-top">
      <button @click="scrollToElement('top')">
        <img class="mobile-hidden" src="@/assets/img/icon/arrow-up.png" />
        <img src="@/assets/img/icon/arrow-up.png" />
        Back to the Top
        <img src="@/assets/img/icon/arrow-up.png" />
        <img class="mobile-hidden" src="@/assets/img/icon/arrow-up.png" />
      </button>
    </section>
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
  methods: {
    scrollToElement(id) {
      let el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.contact {
  .container {
    display: flex;
    @media (max-width: 860px) {
      flex-direction: column;
      h3 {
        font-size: 3.1rem;
        line-height: 5.25rem;
      }
    }
    .text {
      width: 100%;
      @media (min-width: 860px) {
        padding: 0 8rem;
      }
      p {
        max-width: 36.5rem;
      }
    }
    .socials {
      margin-top: 1.5rem;
    }
  }
}

.back-to-top {
  margin-bottom: -10rem;
  padding: 0;
  button {
    border: none;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 25.25rem;
    background-color: var(--clr-text-primary-dark);
    color: #fff;
    font-size: 7.5rem;
    img {
      animation: moveUp 500ms alternate-reverse infinite ease;
    }
    @media (max-width: 860px) {
      height: 12.25rem;
      font-size: 2rem;
      img {
        height: 2rem;
      }
      .mobile-hidden {
        display: none;
      }
    }
  }
}
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
