<template>
  <div>
    <header id="header">
      <div class="container">
        <h1>
          We Design <span class="text-primary-light">&</span> Develop Your Ideas
        </h1>
        <hr />
        <p>
          We are a team of two freelancers. We design and create products and
          services that improve the daily lives of humans.
        </p>
        <img
          class="arrow"
          src="@/assets/img/icon/arrow-down.png"
          alt=""
          @click="scrollToElement('bio')"
        />
      </div>
    </header>

    <section class="bio" id="bio">
      <div class="ali anim">
        <div class="container">
          <div class="image">
            <img src="@/assets/img/avatar/ali.jpg" alt="Ali Kompany" />
          </div>
          <div class="text">
            <h2>I’m Ali,<br />Fullstack Developer</h2>
            <p>
              Love to travel, code, play football and work on new projects.
              Don’t like to listen to load music with bad speakers and eggplant
            </p>
            <a class="get-resume-link" href="#"
              >My Resume
              <img src="@/assets/img/icon/arrow-right-sm.svg" alt="arrow right"
            /></a>
          </div>
        </div>
      </div>

      <div class="sahar anim">
        <div class="container">
          <div class="image">
            <img src="@/assets/img/avatar/sahar.jpg" alt="Sahar Hatami" />
          </div>
          <div class="text">
            <h2>
              I’m Sahar,<br />UI<span class="text-primary-light">&</span>UX
              <br class="hide-mobile" />
              Designer
            </h2>
            <p>
              Love to travel, meet friends and eat gummy candies. Don’t like to
              wake up early and have unfinished projects
            </p>
            <a class="get-resume-link" href="#"
              >My Resume
              <img src="@/assets/img/icon/arrow-right-sm.svg" alt="arrow right"
            /></a>
          </div>
        </div>
      </div>
    </section>

    <section class="work-info">
      <div class="how anim">
        <div class="container">
          <h2>How we work</h2>
          <div>
            <p>
              We work on full remote. As we value strong relationship with our
              customers, we adapt to your timeline, wherever you are.
            </p>
            <!-- <p class="mt-4">Currently in Shiraz 8:21:58 PM</p> -->
          </div>
        </div>
      </div>
      <div class="what anim">
        <div class="container">
          <h2>What we do</h2>
          <p>
            Whether you want a landing page or web application, We design
            (UI/UX) and develop (Django/Vue.js) your ideas and make them
            reality.
          </p>
        </div>
      </div>

      <div class="container anim">
        <a href="mailto:hi@webkar.xyz" class="cto">
          Let’s talk about work
          <img src="@/assets/img/icon/arrow-right.png" />
        </a>
      </div>
    </section>

    <section class="contact">
      <div class="container anim">
        <h3>Contact</h3>
        <div class="text">
          <p>
            If you want to get in touch or want to know more, please contact
            us.<br />
            hi@webkar.xyz
          </p>
        </div>
        <div class="socials">
          <a href="https://linkedin.com/company/webkar"
            ><img src="@/assets/img/icon/in.png" alt="webkar's linkedin"
          /></a>
        </div>
      </div>
    </section>

    <section class="back-to-top">
      <button @click="scrollToElement('header')">
        <img class="mobile-hidden" src="@/assets/img/icon/arrow-up.png" />
        <img src="@/assets/img/icon/arrow-up.png" />
        Back to the Top
        <img src="@/assets/img/icon/arrow-up.png" />
        <img class="mobile-hidden" src="@/assets/img/icon/arrow-up.png" />
      </button>
    </section>

    <footer>
      <p class="container">2021 webkaar studio. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
import animateOnScrollMixin from "@/mixins/animateOnScrollMixin";
export default {
  mixins: [animateOnScrollMixin],
  methods: {
    scrollToElement(id) {
      let el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  head() {
    return {
      title: `Home - Webkar`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We are a team of two freelancers. Whether you want a landing page or web app, We design (UI/UX) and develop (Django/Vue.js) your ideas and make them reality.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-size: 7.5rem;
  line-height: 11.25rem;
}
h2 {
  line-height: 10rem;
}
section {
  padding: 5rem 0;
  @media (max-width: 860px) {
    padding: 3rem 0;
  }
}
.mt-4 {
  margin-top: 2rem;
}
@media (max-width: 860px) {
  h1,
  h2 {
    font-size: 3.1rem;
    line-height: 5.25rem;
  }
  p {
    font-size: 1.5rem !important;
    line-height: 1.87rem !important;
  }
}

// animation

@keyframes moveDown {
  to {
    transform: translateY(1rem);
  }
}

@keyframes moveUp {
  to {
    transform: translateY(-1rem);
  }
}

@keyframes grain {
  100% {
    transform: translate(-21%, -34%);
  }
  10% {
    transform: translate(-22%, -12%);
  }
  30% {
    transform: translate(-22%, 0%);
  }
  50% {
    transform: translate(-10%, -30%);
  }
  70% {
    transform: translate(-15%, -10%);
  }
  90% {
    transform: translate(-30%, -12%);
  }
}

header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: headerReveal 2s forwards 500ms ease-in;
  @media (max-width: 860px) {
    position: relative;
  }
  @media (min-width: 860px) {
    .container {
      position: relative;
    }
  }
  h1 {
    max-width: 76.8rem;
  }
  hr {
    border: 3px solid var(--clr-lines);
    margin: 2rem 0;
  }
  hr,
  p {
    max-width: 37rem;
  }
  .arrow {
    position: absolute;
    bottom: 0;
    right: 0;
    @media (max-width: 860px) {
      bottom: 3rem;
      right: 50%;
    }
    cursor: pointer;
    transition: 100ms all;
    animation: moveDown 500ms alternate-reverse infinite ease;
  }
}

.bio {
  .ali,
  .sahar {
    .container {
      overflow: hidden;
      @media (min-width: 860px) {
        display: flex;
      }
      position: relative;
      .image {
        max-width: 52.4rem;
        height: max-content;
        @media (min-width: 860px) {
          position: absolute;
          z-index: -1;
        }
        @media (max-width: 860px) {
          position: relative;
        }
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
          @media (max-width: 860px) {
            height: 35.6rem;
            width: 100%;
          }
          object-fit: cover;
          vertical-align: middle;
        }
        &:after {
          content: "";
          animation: grain 8s steps(10) infinite;
          background-image: url(data:image/png;base64,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);
          width: 200vw;
          height: 200vh;
          position: absolute;
          left: -50%;
          right: -50%;
          will-change: transform;
        }
      }
      .text {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        h2 {
          max-width: 60rem;
          -webkit-text-stroke: 1px var(--clr-text-primary-dark);
          -webkit-text-fill-color: #fff;
        }
        p {
          max-width: 29.3rem;
          @media (min-width: 860px) {
            margin-top: 8rem;
          }
        }
        .get-resume-link {
          display: flex;
          align-items: center;
          max-width: 15rem;
          margin-top: 1rem;
          img {
            margin-top: 6px;
            margin-left: 2rem;
            transition: all 0.3s ease-in-out;
          }
          &:hover,
          &:focus {
            img {
              transform: translateX(-1rem);
            }
          }
        }
      }
    }
  }
  .ali {
    .container {
      .image {
        @media (min-width: 860px) {
          top: 5rem;
          left: 0;
        }
        img {
          object-position: 40% 50%;
        }
      }
    }
  }
  .sahar {
    margin-top: 10rem;
    @media (max-width: 860px) {
      margin-top: 5rem;
    }
    .container {
      .image {
        @media (min-width: 860px) {
          top: 0;
          right: 0;
        }
      }
      .text {
        align-items: flex-start;
        text-align: left;
        // @media (min-width: 860px) {
        //   padding: 5rem 0;
        // }
      }
    }
  }
}

// .bio {
//   .ali,
//   .sahar {
//     overflow: hidden;
//     .container {
//       display: flex;
//       @media (max-width: 860px) {
//         flex-direction: column;
//       }
//       position: relative;
//       .image-container {
//         @media (min-width: 860px) {
//           position: relative;
//           top: 5rem;
//           z-index: -1;
//         }
//         img {
//           max-width: 52.4rem;
//           height: auto;
//           object-fit: cover;
//           @media (max-width: 860px) {
//             height: 35.6rem;
//             width: 100%;
//           }
//         }
//         &:after {
//           content: "ssss";
//           background-image: url(data:image/png;base64,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);
//           height: 100%;
//           width: 100%;
//           position: fixed;
//           z-index: 10;
//         }
//       }
//       .text {
//         h2 {
//           max-width: 60rem;
//         }
//         p {
//           max-width: 29.3rem;
//           @media (min-width: 860px) {
//             margin-top: 8rem;
//           }
//         }
//         .get-resume-link {
//           text-decoration: none;
//           color: var(--clr-text-primary-color);
//           font-weight: 600;
//           display: flex;
//           align-items: center;
//           max-width: 15rem;
//           margin-top: 1rem;
//           img {
//             margin-top: 6px;
//             margin-left: 2rem;
//             transition: all 0.3s ease-in-out;
//           }
//           &:hover,
//           &:focus {
//             img {
//               transform: translateX(-1rem);
//             }
//           }
//         }
//       }
//     }
//   }
//   .ali {
//     .container {
//       justify-content: flex-end;
//       .image {
//         left: 0;
//       }
//       .text {
//         text-align: right;
//         p {
//           margin-left: auto;
//         }
//         .get-resume-link {
//           margin-left: auto;
//           justify-content: flex-end;
//         }
//       }
//     }
//   }
//   .sahar {
//     margin-top: 10rem;
//     @media (max-width: 860px) {
//       margin-top: 5rem;
//     }
//     .container {
//       justify-content: flex-start;
//       .image {
//         right: 0;
//         top: 0;
//       }
//       .text {
//         p {
//           margin-right: auto;
//           @media (min-width: 860px) {
//             margin-top: 18rem;
//           }
//         }
//       }
//     }
//   }
// }

.work-info {
  .how,
  .what {
    .container {
      display: flex;
      flex-direction: column;
      p {
        max-width: 36.5rem;
      }
    }
  }
  .what {
    margin-top: 5rem;
    .container {
      align-items: flex-end;
      text-align: right;
    }
  }
  .cto {
    margin: auto;
    margin-top: 9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 44.68rem;
    padding: 1.8rem 3rem;
    color: var(--clr-text-primary-dark);
    border: 1px solid #333333;
    text-decoration: none;
    transition: 100ms all ease-in;
    @media (min-width: 860px) {
      font-size: 2.3rem;
    }
    @media (max-width: 860px) {
      font-size: 1.4rem;
      padding: 1rem 2rem;
      margin-top: 6rem;
      margin-bottom: 3rem;
      img {
        width: 2rem;
      }
    }
  }

  .cto:hover {
    background-color: var(--clr-text-primary-dark);
    color: #fff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    img {
      filter: invert(100%);
    }
  }
}

.contact {
  .container {
    display: flex;
    @media (max-width: 860px) {
      flex-direction: column;
    }
    .text {
      width: 100%;
      @media (min-width: 860px) {
        padding: 0 8rem;
      }
      p {
        max-width: 36.5rem;
        @media (max-width: 860px) {
          padding: 2rem 0;
        }
      }
    }
  }
}

.back-to-top {
  padding-bottom: 0;
  button {
    border: none;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 25.25rem;
    background-color: var(--clr-text-primary-dark);
    color: #fff;
    font-size: 7.5rem;
    img {
      animation: moveUp 500ms alternate-reverse infinite ease;
    }
    @media (max-width: 860px) {
      height: 12.25rem;
      font-size: 2rem;
      img {
        height: 2rem;
      }
      .mobile-hidden {
        display: none;
      }
    }
  }
}

footer {
  background-color: #e5e5e5;
  .container {
    padding: 2rem 0;
    text-align: center;
  }
}
</style>
