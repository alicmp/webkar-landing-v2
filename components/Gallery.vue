<template>
  <section class="gallery">
    <h2>GALLERY</h2>
    <div class="lines">
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
    <div class="container">
      <div class="items">
        <a
          v-for="item in gallery"
          :key="item.title"
          :href="item.link"
          class="item anim"
          :class="[ item.is_shifted ? 'shift' : 'not-shift' ]"
        >
          <img :src="item.image" :alt="item.title" />
          <p class="title">{{ item.title }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        {
          title: "UI/UX",
          image: require("@/assets/img/landing/ui-ux.png"),
          link: "gallery?category=UI",
          is_shifted: false,
        },
        {
          title: "Logo Design",
          image: require("@/assets/img/landing/logo.jpg"),
          link: "gallery?category=LOGO",
          is_shifted: true,
        },
        {
          title: "Motion",
          image: require("@/assets/img/landing/motion.png"),
          link: "gallery?category=MOT",
          is_shifted: false,
        },
        {
          title: "Other",
          image: require("@/assets/img/landing/illustration.jpg"),
          link: "gallery?category=OTH",
          is_shifted: true,
        },
      ],
    };
  },
};
</script>


<style scoped lang="scss">
.gallery {
  background-color: #f3f4f6;
  position: relative;
  overflow: hidden;
  .lines {
    z-index: 5;
  }
  h2 {
    @media (min-width: 860px) {
      color: rgba(189, 189, 189, 0.2);
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 22.375rem;
      line-height: 70%;
    }
    // @media (max-width: 860px) {
    //   display: none;
    // }
    @media (max-width: 860px) {
      -webkit-text-stroke: 2px var(--clr-text-primary-dark);
      font-size: 3rem;
      line-height: 4.375rem;
      margin: 5rem auto 3.4375rem auto;
      width: min(90%, 1460px);
    }
    -webkit-text-fill-color: #fff;
  }
  .container {
    position: relative;
    z-index: 6;
    padding: 14.87rem 0 19.375rem 0;
    @media (max-width: 860px) {
      padding: 0rem 0 5rem 0;
    }
    .items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
      @media (max-width: 860px) {
        grid-template-columns: repeat(2, 1fr);
      }
      gap: 2rem;
      @media (min-width: 1440px) {
        .shift {
          margin-top: -4rem;
          height: calc(100% - 4rem);
        }
      }
      @media (max-width: 860px) {
        gap: 1rem;
        .shift {
          margin-top: 4rem;
          height: calc(100% - 4rem);
        }
        .not-shift {
          height: calc(100% - 4rem);
        }
      }
      .item {
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        @media (max-width: 860px) {
          // width: 60%;
        }
        p {
          @media (min-width: 860px) {
            height: 100%;
            transition: 100ms ease-in;
            top: 0;
          }
          @media (max-width: 860px) {
            height: 3.5rem;
            bottom: 0;
          }
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(57, 32, 32, 0.8);
          color: #fff;
          position: absolute;
          z-index: 7;
        }
        img {
          z-index: 6;
          vertical-align: top;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
      .item:hover {
        p {
          background-color: rgba(57, 32, 32, 0.6);
        }
      }
    }
  }
}
</style>