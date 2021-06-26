<template>
  <div>
    <header id="header">
      <div class="container">
        <h1>
          We Design <span class="text-primary-light">&</span> Develop Your Ideas
        </h1>
        <hr />
        <p>
          We are a team of two freelancers. Whether you want a landing page or
          web application, We design (UI/UX) and develop (Django/Vue.js) your
          ideas and make them reality.
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
          <img
            class="image"
            src="@/assets/img/avatar/ali.jpg"
            alt="Ali Kompany"
          />
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
          <img
            class="image"
            src="@/assets/img/avatar/sahar.jpg"
            alt="Sahar Hatami"
          />
          <div class="text">
            <h2>
              I’m Sahar,<br />UI<span class="text-primary-light">&</span>UX
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
            We design and create products and services that improve the daily
            lives of humans, while meeting brand and business goals.
          </p>
        </div>
      </div>

      <div class="container anim">
        <a href="#" class="cto">
          Let’s talk about you
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
        Back To The Top
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
    overflow: hidden;
    .container {
      display: flex;
      @media (max-width: 860px) {
        flex-direction: column;
      }
      position: relative;
      .image {
        @media (min-width: 860px) {
          position: absolute;
          top: 5rem;
          z-index: -1;
        }
        max-width: 52.4rem;
        height: auto;
        object-fit: cover;
        @media (max-width: 860px) {
          height: 35.6rem;
          width: 100%;
        }
      }
      .text {
        h2 {
          max-width: 60rem;
        }
        p {
          max-width: 29.3rem;
          @media (min-width: 860px) {
            margin-top: 10rem;
          }
        }
        .get-resume-link {
          text-decoration: none;
          color: var(--clr-text-primary-color);
          font-weight: 600;
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
      justify-content: flex-end;
      .image {
        left: 0;
      }
      .text {
        text-align: right;
        p {
          margin-left: auto;
        }
        .get-resume-link {
          margin-left: auto;
          justify-content: flex-end;
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
      justify-content: flex-start;
      .image {
        right: 0;
        top: 0;
      }
      .text {
        p {
          margin-right: auto;
          @media (min-width: 860px) {
            margin-top: 18rem;
          }
        }
      }
    }
  }
}

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
    background-color: #101010;
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
