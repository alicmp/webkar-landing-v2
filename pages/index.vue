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
      <div class="ali">
        <div class="container">
          <img src="@/assets/img/tmp.png" alt="Ali Kompany" />
          <div class="text">
            <h2>I’m Ali,<br />Fullstack Developer</h2>
            <p>
              Love to travel, code, play football and start new projects. Don’t
              like to listen to load music with bad speaker and eggplant
            </p>
          </div>
        </div>
      </div>
      <div class="sahar">
        <div class="container">
          <img src="@/assets/img/tmp.png" alt="Sahar Hatami" />
          <div class="text">
            <h2>
              I’m Sahar,<br />UI<span class="text-primary-light">&</span>UX
              Designer
            </h2>
            <p>
              Love to travel, meet friends and eat gummy candies. Don’t like to
              wake up early and have unfinished projects
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="work-info">
      <div class="how">
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
      <div class="what">
        <div class="container">
          <h2>What we do</h2>
          <p>
            We help design and create products and services that improve the
            daily lives of humans, while meeting brand and business goals.
          </p>
        </div>
      </div>

      <div class="container">
        <a href="#" class="cto">
          Let’s talk about you
          <img src="@/assets/img/icon/arrow-right.png" />
        </a>
      </div>
    </section>

    <section class="contact">
      <div class="container">
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
export default {
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
header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      bottom: 2rem;
      right: 50%;
    }
    cursor: pointer;
    transition: 100ms all;
    &:hover {
      transform: translateY(0.5rem);
    }
  }
}

.bio {
  .ali,
  .sahar {
    .container {
      display: flex;
      @media (max-width: 860px) {
        flex-direction: column;
      }
      position: relative;
      img {
        @media (min-width: 860px) {
          position: absolute;
          bottom: 0;
          z-index: -1;
        }
        max-width: 52.4rem;
        height: auto;
      }
      .text {
        h2 {
          max-width: 60rem;
        }
        p {
          max-width: 29.3rem;
          @media (min-width: 860px) {
            margin-top: 5rem;
          }
        }
      }
    }
  }
  .ali {
    .container {
      justify-content: flex-end;
      img {
        left: 0;
      }
      .text {
        text-align: right;
        p {
          margin-left: auto;
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
      img {
        right: 0;
      }
      .text {
        p {
          margin-right: auto;
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
      transition: all 100ms ease-in;
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
  button:hover {
    img {
      transform: translateY(-16px);
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
