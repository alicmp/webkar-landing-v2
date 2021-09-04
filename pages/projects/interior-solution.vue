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
        src="@/assets/img/projects/int-sol/header.jpg"
        alt="Interior Solution"
        class="anim large-image"
      />
    </header>

    <div class="container anim">
      <div class="text pull-right">
        <h3>Interior Solution</h3>
        <p>
          Interior solution is a professional building company in Cambridge UK.
          They wanted a website to introduce themselves and showcase their
          projects. I used yellow and black for designing the website and logo
          to convey the feeling of luxury and grab users' attention.
        </p>
      </div>
    </div>

    <div class="full-width-image anim">
      <img
        src="@/assets/img/projects/int-sol/design-1.jpg"
        alt="Webkaar Design"
        class="large-image"
      />
    </div>

    <div class="container">
      <div class="image-gallery">
        <img
          src="@/assets/img/projects/int-sol/ui-kit.jpg"
          alt="Interior Solution UI kit"
          class="item-4 anim"
        />
        <img
          src="@/assets/img/projects/int-sol/logo-1.jpg"
          alt="Interior Solution Design"
          class="item-5 anim"
        />
        <img
          src="@/assets/img/projects/int-sol/logo-2.jpg"
          alt="Interior Solution Design"
          class="item-6 anim"
        />
        <img
          src="@/assets/img/projects/int-sol/design-2.jpg"
          alt="Interior Solution Components"
          class="item-7 large-image anim"
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
      title: `Projects - Interior Solution - Sahar Hatami`,
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
.full-width-image {
  margin-bottom: 1rem;;
  @media (min-width: 860px) {
    margin-bottom: 3.5rem;;
  }
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
    .item-4 {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .item-5 {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    .item-6 {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    .item-7 {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
}
.large-image {
  min-height: 30vh;
}
</style>