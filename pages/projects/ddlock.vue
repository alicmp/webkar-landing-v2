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
      <img src="@/assets/img/projects/ddlock/ddlock.jpg" alt="DD Lock" class="anim" />
    </header>

    <div class="container anim">
      <div class="text pull-right">
        <h2>Webkar UI/UX Design</h2>
        <p>
          When the project began, the solution already existed. Now, my role as
          a designer was to work backgrounds to find the right problem for the
          solution. The intern team was tasked with creating a demo that could
          be showcased to clients to invoke new ideas in their heads.
        </p>
      </div>
    </div>

    <div class="full-width-image anim">
      <img
        src="@/assets/img/projects/ddlock/ddlock-2.jpg"
        alt="DD-Lock Design"
      />
    </div>

    <div class="container anim">
      <div class="text pull-left">
        <h2>Webkar UI/UX Design</h2>
        <p>
          When the project began, the solution already existed. Now, my role as
          a designer was to work backgrounds to find the right problem for the
          solution. The intern team was tasked with creating a demo that could
          be showcased to clients to invoke new ideas in their heads.
        </p>
      </div>
    </div>

    <div class="container anim">
      <div class="image-gallery">
        <img
          src="@/assets/img/projects/ddlock/ddlock-logo.jpg"
          alt="DD Lock Logo"
          class="item-1"
        />
        <img
          src="@/assets/img/projects/ddlock/ddlock-mobile.jpg"
          alt="DD Lock Mobile Design"
          class="item-2"
        />
        <img
          src="@/assets/img/projects/ddlock/ddlock-3.jpg"
          alt="DD Lock design"
          class="item-3"
        />
      </div>
    </div>

    <div class="container anim">
      <div class="text pull-right">
        <h2>Webkar UI/UX Design</h2>
        <p>
          When the project began, the solution already existed. Now, my role as
          a designer was to work backgrounds to find the right problem for the
          solution. The intern team was tasked with creating a demo that could
          be showcased to clients to invoke new ideas in their heads.
        </p>
      </div>
    </div>

    <div class="container anim">
      <img
        src="@/assets/img/projects/ddlock/ddlock-design-library.jpg"
        alt="DD Lock Design Library"
      />
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
  h2 {
    font-weight: 600;
    font-size: 52px;
    line-height: 94px;
  }
}
.text {
  max-width: 838px;
  padding: 14.43rem 0 21.37rem 0;
  @media (max-width: 860px) {
    padding: 4rem 0 3rem 0;
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
  gap: 3.5rem;
  @media (min-width: 860px) {
    .item-1 {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    .item-2 {
      grid-column-start: 2;
      grid-column-end: 3;
    }
    .item-3 {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
}
</style>