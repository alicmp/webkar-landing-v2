<template>
  <div class="contact anim">
    <div class="container">
      <h2>Contact</h2>
      <p>
        Always keen for a good proposition<br class="hide-mobile"> so feel free to reach out!
      </p>
      <a class="arrow-link" href="mailto:hatami.sahar.91@gmail.com"
        >Email
        <img src="@/assets/img/icon/arrow-right-sm-white.svg" alt="arrow right"
      /></a>
      <a class="arrow-link" href="https://www.linkedin.com/in/sahar-hatami/"
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
            "You can find my email and linkedin address here.",
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
