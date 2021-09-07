<template>
  <div class="contact anim">
    <div class="container">
      <h2>Contact</h2>
      <p>
        Always keen for a good proposition<br class="hide-mobile"> so feel free to reach out!
      </p>
      <a class="arrow-link" href="/resume/SaharHatami.pdf"
        >Email
        <img src="@/assets/img/icon/arrow-right-sm-white.svg" alt="arrow right"
      /></a>
      <a class="arrow-link" href="/resume/SaharHatami.pdf"
        >LinkedIn
        <img src="@/assets/img/icon/arrow-right-sm-white.svg" alt="arrow right"
      /></a>
    </div>
  </div>
</template>

<script>
import animateOnScrollMixin from "@/mixins/animateOnScrollMixin";

export default {
  mixins: [animateOnScrollMixin],
  layout: "contact",
  head() {
    return {
      title: `Contact - Sahar Hatami`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "I design (UI/UX) your ideas and make them reality.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 60px;
  a {
    color: #fff;
  }
}
</style>
