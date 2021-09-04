<template>
  <article>
    <div class="lines">
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>

    <header>
      <img
        src="@/assets/img/projects/webkar/webkar.jpg"
        alt="Webkaar"
        class="anim large-image"
      />
    </header>

    <div class="container anim">
      <div class="text pull-right">
        <h3>Webkar UX/UI Design</h3>
        <p>
          Webkar is a site builder similar to Wix.com. As co-founder, I was
          responsible for doing all the UI and UX works in the early stages. We
          wanted to build something different from other website builders in the
          market, Something that everyone can use, whether they are professional
          designers or some local business owner who wanted a website for his
          bakery.
        </p>
      </div>
    </div>

    <div class="full-width-image anim">
      <img
        src="@/assets/img/projects/webkar/webkar-1.jpg"
        alt="Webkaar Design"
        class="large-image"
      />
    </div>

    <div class="container anim">
      <div class="text pull-left">
        <h3>Easy To Use Dashboard</h3>
        <p>
          In the heart of Webkar lays the dashboard. It
          could make or break the whole project. It should encapsulate all the
          necessary tools for the user to build his website yet it must be
          minimal so the user doesn't get lost in all the tools. I coordinated
          multiple user research interviews And used them to design a
          user-friendly dashboard.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="image-gallery">
        <img
          src="@/assets/img/projects/webkar/webkaar-2.jpg"
          alt="Webkaar Design"
          class="item-1 large-image anim"
        />
        <img
          src="@/assets/img/projects/webkar/webkaar-component.jpg"
          alt="Webkaar Components"
          class="item-1 large-image anim"
        />
        <img
          src="@/assets/img/projects/webkar/webkaar-3.jpg"
          alt="Webkaar Design"
          class="item-2 anim"
        />
        <img
          src="@/assets/img/projects/webkar/webkaar-logo.jpg"
          alt="Webkaar Logo"
          class="item-3 anim"
        />
      </div>
    </div>
  </article>
</template>

<script>
import animateOnScrollMixin from "@/mixins/animateOnScrollMixin";
export default {
  mixins: [animateOnScrollMixin],
};
</script>

<style lang="scss" scoped>
article {
  position: relative;
  margin-top: 60px;
}
@media (min-width: 860px) {
  h3 {
    font-weight: 600;
    font-size: 52px;
    line-height: 94px;
  }
}
.text {
  max-width: 838px;
  padding: 10.43rem 0 15.37rem 0;
  @media (max-width: 860px) {
    padding: 3rem 0 2.5rem 0;
  }
  p {
    margin-top: 1.5rem;
  }
}
.pull-right {
  margin-left: auto;
}
.pull-left {
  margin-right: auto;
}
.image-gallery {
  display: grid;
  gap: 1rem;
  @media (min-width: 860px) {
    gap: 3.5rem;
    .item-1 {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .item-2 {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    .item-3 {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
}
.large-image {
  min-height: 30vh;
}
</style>