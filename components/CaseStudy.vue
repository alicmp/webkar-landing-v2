<template>
  <section id="case-study" class="case-study px-xl">
    <div class="container">
      <h2>CASE STUDY</h2>
    </div>
    <div class="items" ref="slider">
      <a
        v-for="(item, index) in works"
        :key="item.title"
        :href="item.link"
        class="item"
        :class="{ active: activeItem == index }"
      >
        <img :src="item.image" :alt="item.title" />
        <div class="text">
          <p class="title">{{ item.title }}</p>
          <p class="number">{{ item.number }}</p>
          <p class="hashtag">{{ item.tag }}</p>
        </div>
      </a>
    </div>
    <div class="container controller">
      <img src="@/assets/img/icon/left.svg" alt="" @click="previous">
      <a href="/projects" class="border-btn">See More</a>
      <img src="@/assets/img/icon/right.svg" alt="" @click="next">
    </div>
  </section>
</template>

<script>
export default {
  name: "Slider",

  data() {
    return {
      isDown: false,
      startX: 0,
      scrollLeft: 0,
      activeItem: 0,
      works: [
        {
          image: require("@/assets/img/landing/webkar.jpg"),
          title: "Webkar Platform",
          tag: "#UIUX #Branding",
          link: "/projects/webkaar",
          number: "01",
        },
        {
          image: require("@/assets/img/landing/neshiman.jpg"),
          title: "Neshiman Ferniture",
          tag: "#Redisign",
          link: "/projects/neshiman",
          number: "02",
        },
        {
          image: require("@/assets/img/landing/fitto.jpg"),
          title: "Fitto Platform",
          tag: "#UIUX",
          link: "/projects/fitto-eco",
          number: "03",
        },
      ],
    };
  },
  methods: {
    next() {
      if (this.activeItem + 1 >= this.works.length) {
        return
      }
      this.activeItem += 1;
      this.$refs.slider.scrollLeft += this.$refs.slider.querySelector('.item').clientWidth
    },
    previous() {
      if (this.activeItem == 0) {
        return
      }
      this.activeItem -= 1;
      this.$refs.slider.scrollLeft -= this.$refs.slider.querySelector('.item').clientWidth
    },
  },
};
</script>

<style lang="scss" scoped>
.case-study {
  h2 {
    text-align: right;
    margin-bottom: 11.87rem;
    -webkit-text-stroke: 4px var(--clr-text-primary-dark);
    @media (max-width: 860px) {
      -webkit-text-stroke: 2px var(--clr-text-primary-dark);
      font-size: 3rem;
      line-height: 4.375rem;
      margin: 1.5rem 0 3.4375rem 0;
    }
    -webkit-text-fill-color: #fff;
  }
  .controller {
    width: 50%;
    margin-top: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .border-btn {
      display: inline-block;
      margin: 0;
      justify-content: center;
      width: max-content;
      font-size: 1.75rem;
    }
    img {
      cursor: pointer;
    }
  }
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 11.25rem;
    overflow-x: hidden;
    scroll-behavior: smooth;
    width: 100%;
    padding-left: 11.25rem;
    will-change: transform;
    user-select: none;
    .item {
      display: flex;
      user-select: none;
      transition: all 0.2s ease-in;
      transform: scale(0.80);
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
      filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
      .text {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .number {
          margin-left: 3rem;
          font-weight: 500;
          font-size: 48px;
          line-height: 72px;
          color: #bdbdbd;
        }
        .title {
          position: absolute;
          top: 35%;
          left: -5.5rem;
          max-width: 18.5rem;
          font-weight: 500;
          font-size: 3rem;
          line-height: 72px;
          color: #392020;
        }
        .hashtag {
          margin-left: 3rem;
          margin-bottom: 2.5rem;
          width: 13.43rem;
          left: 3rem;
          font-weight: 500;
          font-size: 22px;
          line-height: 33px;
          color: #bdbdbd;
        }
      }
      img {
        max-width: 35.3rem;
        max-height: 24.1rem;
        border-radius: 5px;
      }
    }
    .active {
      -webkit-filter: grayscale(0);
      filter: none;
      transform: scale(0.97);
    }
    .active:hover {
      transform: scale(1);
    }
  }
}
</style>