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
        src="@/assets/img/projects/ddlock/ddlock.jpg"
        alt="DD Lock"
        class="anim large-image"
      />
    </header>

    <div class="container anim">
      <div class="text pull-right">
        <h3>DD Lock</h3>
        <p>
          DD-lock is a company that sells all things related to smart homes,
          such as smart locks and remote monitoring systems. I built sharp
          interfaces and interactive experiences for their e-commerce website. I
          chose black and blue colors for designing the website to convey the
          feeling of luxury and safety.
        </p>
      </div>
    </div>

    <div class="full-width-image anim">
      <img
        src="@/assets/img/projects/ddlock/ddlock-2.jpg"
        alt="DD-Lock Design"
        class="large-image"
      />
    </div>

    <div class="container anim">
      <div class="text pull-left">
        <p>
          For designing the logo I combined three elements: 1- fingerprint,
          which represents smart door locks. 2- lock Icon. 3- DD that is the
          beginning of their brand name (DD Lock)
        </p>
      </div>
    </div>

    <div class="container">
      <div class="image-gallery">
        <img
        src="@/assets/img/projects/ddlock/ddlock-mobile.jpg"
        alt="DD Lock Mobile Design"
        class="item-1 large-image anim"
      />
        <img
          src="@/assets/img/projects/ddlock/ddlock-3.jpg"
          alt="DD Lock design"
          class="item-1 large-image anim"
        />
        <img
          src="@/assets/img/projects/ddlock/ddlock-logo.jpg"
          alt="DD Lock Logo"
          class="item-2 anim"
        />
        <img
          src="@/assets/img/projects/ddlock/ddlock-design-library.jpg"
          alt="DD Lock Design Library"
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
      title: `DD Lock - Projects - Sahar Hatami`,
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