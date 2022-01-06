<template>
  <section id="case-study" class="case-study px-xl">
    <div class="container head">
      <img
        id="wheel"
        class="wheel"
        src="@/assets/img/icon/wheel.png"
        alt="wheel"
      />
      <h2 class="anim">Case Studies</h2>
    </div>
    <div
      ref="slider"
      :style="`transform: translateX(${transformValue}vw)`"
      class="items"
    >
      <div
        v-for="(item, index) in works"
        :key="item.title"
        class="item anim"
        :class="{ active: index == activeItem }"
      >
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" />
          <div class="text">
            <p class="number poppins">{{ item.number }}</p>
            <p class="title poppins" v-html="item.title"></p>
            <p class="hashtag poppins">{{ item.tag }}</p>
          </div>
        </a>
      </div>
    </div>
    <div class="container controller">
      <img src="@/assets/img/icon/left.svg" alt="" @click="previous" />
      <a href="/case-studies" class="border-btn">See More</a>
      <img src="@/assets/img/icon/right.svg" alt="" @click="next" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Slider",

  data() {
    return {
      transformValue: -25,
      activeItem: 1,
      works: [
        {
          image: require("@/assets/img/works/bistex.png"),
          title: "Bistex<br>Exchange",
          tag: "#UIUX",
          link: "/case-studies/bistex",
          number: "01",
        },
        {
          image: require("@/assets/img/landing/webkar.jpg"),
          title: "Webkar<br>Platform",
          tag: "#UIUX #Branding",
          link: "/case-studies/webkaar",
          number: "02",
        },
        {
          image: require("@/assets/img/landing/fitto.jpg"),
          title: "Fitto<br>Platform",
          tag: "#UIUX",
          link: "/case-studies/fitto-eco",
          number: "03",
        },
      ],
    };
  },
  methods: {
    next() {
      if (this.transformValue > -75) {
        this.transformValue -= 50;
        this.activeItem++;
      }
    },
    previous() {
      if (this.transformValue < 25) {
        this.transformValue += 50;
        this.activeItem--;
      }
    },
  },
  mounted() {
    window.onscroll = function () {
      let image = document.getElementById("wheel");
      image.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
    };
  },
};
</script>

<style lang="scss" scoped>
.case-study {
  overflow: hidden;
  .head {
    display: flex;
    justify-content: space-between;
    .wheel {
      width: 10.5rem;
      height: 10.5rem;
      @media (max-width: 860px) {
        display: none;
      }
    }
  }
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
    @media (max-width: 860px) {
      margin-top: 6rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    .border-btn {
      display: inline-block;
      margin: 0;
      justify-content: center;
      width: max-content;
      font-size: 1.75rem;
      @media (max-width: 860px) {
        width: 16rem;
        font-size: 1.5rem;
      }
    }
    img {
      cursor: pointer;
      @media (max-width: 860px) {
        display: none;
      }
    }
  }
  .items {
    @media (min-width: 860px) {
      display: inline-flex;
    }
    @media (max-width: 860px) {
      transform: translateX(0) !important;
      margin: auto;
      width: min(90%, 1460px);
      margin-bottom: -5rem;
    }
    overflow: hidden;
    transition: transform 0.5s ease-in;
    .item {
      @media (min-width: 860px) {
        width: 50vw;
      }
      @media (max-width: 860px) {
        margin-bottom: 5rem;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        @media (min-width: 860px) {
          display: flex;
        }
        .text {
          @media (min-width: 860px) {
            position: relative;
          }
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .number,
          .title {
            font-size: 3rem;
            line-height: 72px;
            @media (max-width: 1366px) {
              font-size: 2.4rem;
              line-height: 3.5rem;
            }
            font-weight: 500;
          }
          .number {
            margin-left: 3rem;
            color: #bdbdbd;
          }
          .title {
            @media (min-width: 860px) {
              position: absolute;
              top: 31%;
              left: -5rem;
            }
            @media (max-width: 860px) {
              margin-left: 1rem;
            }
            color: #392020;
          }
          .hashtag {
            @media (min-width: 860px) {
              margin-bottom: 2.5rem;
              width: max-content;
              left: 3rem;
              font-size: 1.375rem;
              line-height: 2rem;
            }
            @media (max-width: 860px) {
              margin-top: 1rem;
              font-size: 1.125rem;
              line-height: 1.6875rem;
            }
            margin-left: 3rem;
            font-weight: 500;
            color: #bdbdbd;
          }
        }
        img {
          @media (min-width: 860px) {
            max-width: 30vw;
            transition: all 0.3s ease-in;
            filter: gray;
            /* IE6-9 */
            -webkit-filter: grayscale(1);
            /* Google Chrome, Safari 6+ & Opera 15+ */
            filter: grayscale(1);

            transform: scale(0.9);
            transition: all 0.3s ease;
          }
          height: auto;
          object-fit: cover;
          border-radius: 5px;
        }
      }
    }
    .item.active {
      img {
        transform: scale(0.95);
        filter: none;
        /* IE6-9 */
        -webkit-filter: grayscale(0);
        /* Google Chrome, Safari 6+ & Opera 15+ */
        filter: grayscale(0);
      }
    }
    .item:hover {
      img {
        transform: scale(1);
      }
    }
  }
}
</style>