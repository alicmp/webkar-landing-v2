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
        src="@/assets/img/projects/fitto-eco/back-1.jpg"
        alt="Fittoeco Tourism"
        class="anim large-image"
      />
    </header>

    <div class="container anim">
      <div class="text pull-right">
        <h3>Fittoeco</h3>
        <p>
          Fitto was an eco-tourism startup. I started my work there as a graphic
          designer. I designed multiple ad campaigns for them. Gradually I
          switched to UI/UX role. I provided design solutions to solve user
          needs and business challenges through User Research, Interaction
          Design, Visual Design, and Prototyping.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="image-gallery">
        <img
          src="@/assets/img/projects/fitto-eco/fitto-1.jpg"
          alt="Fittoeco Poster"
          class="item-1 large-image anim"
        />
        <img
          src="@/assets/img/projects/fitto-eco/fitto-2.jpg"
          alt="Fittoeco mobile application"
          class="item-2 anim"
        />
        <img
          src="@/assets/img/projects/fitto-eco/fitto-3.jpg"
          alt="Fittoeco wireframe"
          class="item-3 anim"
        />
      </div>
    </div>

    <div class="container">
      <div class="full-width-image anim mt-4">
        <img
          src="@/assets/img/projects/fitto-eco/fitto-5.jpg"
          alt="Fittoeco UI"
          class="large-image"
        />
      </div>
    </div>

    <div class="container">
      <div class="image-gallery mt-4">
        <img
          src="@/assets/img/projects/fitto-eco/fitto-4.jpg"
          alt="Fittoeco Character"
          class="item-1 large-image anim"
        />
        <img
          src="@/assets/img/projects/fitto-eco/fitto-icon-1.jpg"
          alt="Fittoeco Iconset"
          class="item-2 anim"
        />
        <img
          src="@/assets/img/projects/fitto-eco/fitto-icon-2.jpg"
          alt="Fittoeco Iconset"
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
  head() {
    return {
      title: `Fittoeco - Projects - Sahar Hatami`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "I design (UI/UX) your ideas and make them reality.",
        },
      ],
    };
  },
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