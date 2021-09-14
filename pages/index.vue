<template>
  <div>
    <header id="header">
      <div class="container">
        <h1>
          Hi, I'm Sahar <br />
          UX/UI Designer
        </h1>
        <hr />
        <p>
          I design memorable digital experiences AND help customers create
          minimal solutions that improve the daily lives of humans by being ever
          more unique, creative, and sustainable.
        </p>
        <img
          class="arrow"
          src="@/assets/img/icon/arrow-down.png"
          alt=""
          @click="scrollToElement('works')"
        />
      </div>
    </header>

    <section id="works" class="work-sample anim-dark px-l">
      <div class="work-sample-container px-l">
        <div class="lines">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        <div class="container">
          <div class="sample-col col-1">
            <a class="sample anim" href="/projects/webkaar">
              <h4>Webkaar</h4>
              <div class="image-container">
                <img src="@/assets/img/works/webkaar.png" alt="Webkaar" />
              </div>
            </a>
            <a class="sample anim" href="/projects/interior-solution">
              <h4>Interior Solutions</h4>
              <div class="image-container">
                <img
                  src="@/assets/img/works/1-interiorsolutions.jpg"
                  alt="Interior Solutions Website"
                />
              </div>
            </a>
          </div>
          <div class="sample-col col-2">
            <h2 class="anim">Recent<br />Projects</h2>
            <a class="sample anim" href="/projects/ddlock">
              <h4>DD-Lock</h4>
              <div class="image-container">
                <img src="@/assets/img/works/2-ddlock.jpg" alt="DD-Lock" />
              </div>
            </a>
            <a class="sample anim fitto">
              <h4>Fittoeco Tourisem</h4>
              <div class="image-container">
                <img
                  src="@/assets/img/works/3-fitto.jpg"
                  alt="Fittoeco Tourisem"
                />
              </div>
            </a>
          </div>
        </div>

        <div class="container anim">
          <a href="/projects" class="border-btn">
            See More
            <img src="@/assets/img/icon/arrow-right.png" />
          </a>
        </div>
      </div>
    </section>

    <section class="bio">
      <div class="sahar anim">
        <div class="container">
          <div class="image">
            <img src="@/assets/img/avatar/sahar.jpg" alt="Sahar Hatami" />
          </div>
          <div class="text">
            <h2>
              I’m Sahar,<br />UI<span class="text-primary-light">&</span>UX
              Designer
            </h2>
            <div class="story">
              <h3>My Story</h3>
              <p>
                I’m a UX/UI Designer at Webkar Studio. I’ve been designing
                things for the last eight years and I’ve had the opportunity to
                work with various clients. Over the years, I learned that the
                best user experiences lead to great business outcomes. I try to
                reach these goals each time: making my work as accessible,
                pleasant, and inclusive as possible, learning from my past
                experiences to build better things. Outside of my job I love to
                read, see exhibitions, travel, climb mountains and meet people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="resume px-xl anim">
      <div class="container">
        <h3>All Works</h3>
        <table>
          <tbody>
            <tr v-for="res in resume" :key="res.company">
              <td class="year">{{ res.year }}</td>
              <td class="company">{{ res.company }}</td>
              <td class="position">{{ res.position }}</td>
            </tr>
          </tbody>
        </table>
        <a class="arrow-link" href="/resume/SaharHatami.pdf" download=""
          >Download My Resume
          <img src="@/assets/img/icon/arrow-right-sm.svg" alt="arrow right"
        /></a>
      </div>
      <div class="container anim">
        <a href="mailto:sahar@webkar.xyz" class="border-btn">
          Let’s talk about you
          <img src="@/assets/img/icon/arrow-right.png" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import animateOnScrollMixin from "@/mixins/animateOnScrollMixin";
export default {
  mixins: [animateOnScrollMixin],
  data() {
    return {
      resume: [
        {
          year: "2020",
          company: "Webkaar Studio",
          position: "UX/UI Designer",
        },
        {
          year: "2018",
          company: "Tavvandad Company",
          position: "UX/UI and Graphic Designer",
        },
        {
          year: "2017",
          company: "Salimi Studio",
          position: "Graphic Designer",
        },
        {
          year: "2015",
          company: "Shole Print house",
          position: "Graphic Designer",
        },
        {
          year: "2014",
          company: "Ara Clinic",
          position: "Marketing Consultant and Graphic Designer",
        },
      ],
    };
  },
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
      title: `Sahar Hatami - UX/UI Designer`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "I design (UX/UI) your ideas and make them reality.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
    border: none;
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
      bottom: 6.5rem;
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
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAOh0lEQVR4nO1dbVczNw69JCEvBJInEEIgEIb//6/6fbu73e77tt0P1o2vZQ3QPgRCmHsOJ8mMx5ZlWZJljQEynlBia58ncq3nykzs8wzApVy/ATAAMANwJdevACxdnbCyp/bHNhqpn/DP3aMdS/ucAri17xurQ/s6AnBhfbiQZzZSbgvgzuiE1Te0MgDwIO2RdsUaJR/0OvtwzYuPdsPjSgjcyOfICBjZNWXSBuXALIJ6WfejPctONkE5DkgPiWEed0YLvxNDa2OM1NELxBja81P7fenun9vnSK7N5ftUngXSAPo6psg84qDMXRkveNggd6yxB+5cmbl1wGOENCPY4K0RtXXlKQl9+xzb5zVEOgw9o8d3DqiFRwXi2ujnLCMDhsidvkItKMoQlfq+K0fhmSHNiBt3PxIaIA+ob3fsC0ZYSAXs2D1K5pKwaIBWSExaIxG9QGICpWIZPAMkBpAxQ6snkuyVfXJgrqy8DtTG2ovUhEo71fIKtfq7RBKuKcoB2yLPijPUwnRjbbPMDIlf/E3ePSDPwL6VC/FoD9+5xuGIbuS7lgGSLfDg4M5Rqyf/G9b+Vcs9IEsXO3KGPNgDV/bO2h9aOaWPA0k7wxnnbeoCZT/HyIyeSnmdJQ+oQYGiMFQDQcltXOOXyJLBxm6s8SFKVeF14AMSE0aI4dUhkKSlQckIDuI31AzigPSRmPrcDFQ6orYVT1LXwmhoXJlv7vfAlaFArJD6tZV7aj/OkQekB9MIE/tT9UNvR3XkUhoaW2XKJA7QBKnTvKfMaJBm2SVidQK752fYOerBpbTOrS2VtBVKpg2NdtIY2SbarElwf+3KeW8P9lyb2hkh95d2hHWQ74UH23OfS+SpBaQBoLGLDNc98pQHsrSsUXoZC6tHO7hGNp5nqD0QoB68to73hE5fhgIS2b1DUtNFZZwVHFE1WNqRKbLK2CCrmwnylD9FGqRuBia8dgaGeETq0NoaO0di/AWyZ6ANRd7Q1OpRREzyM2JrBHvDzLZ8nQTdbV8XdfgSaQZurc0TpIF5QCks6opeIktyNHMVHNA5kiZYol6zRJgajbt2STQlgJ7DAFnfTZAk+hzZgDdSXsHrlJZzpI6rsZ0jM4+E3iLNmGhwGySB0MGgmpsgCQ7VDjFs+a44sXojFeg9JGqLjbXD/tyiXvkDdT+qxR+yKpugNPw7xpNJG7k3kt+8T9UUgeuQtntkmhqxi5b6blAO5I3R2ragOrV6dOCeiwQAecaz/ceAFg7oFcp1ySlqY+3tMdE2QFR9u34+WKWcBRO5zk5EBmuIeBo27vfIffJZxSXSoLOdOdpVEzFA6erSqWiQ+kOmqvRPkIRli3jVPEEO6XhsUTs0V8gaZYV2N19xgWTnIjuGPtIIjQH8COBXAP+zzvwA4L/296s8uEZi4C9GzBDAv+X+qdTzaN//hcSAfxjx1/bMCDkI+U8j9me79pN18gyJQf+xjvxkdfxiz8Dq/dm+/8Wuz6x/Y7kHo+dXAH+1+v9u1/tW54/2e2Y0sszfjAYgCe5v1s6NPXMqdS2Mr1O5Rlzb839GEp7fkAb2TyygKoF6rO9+k0B6RXyGQTxfVw9Zymh7+qiDbA3ygPj2IrB9hmN8edXTY5R2gG00KD0kfUbpUxea6CNWfTTMsGeoATgLB0hC3Ecd/3oRh2joxshqKVqJqzdD71CxRvbxvbfU2Oc3o/MWNd41vhcZUxZ8ycXVihgQhBCvnWuT/pHdU2lUg3iP53XzBVJnv6EeCJ0JM6OHwkaBU1s4D+icIPWL6zNYPeQRI790fnywUfF7lhM79JGYwAXRLbIB1cGgJMxQGsgV0vRk8A3IqoBSskDSuZ7RrJPttO2neOjCTQc2WiEz7qVrFhWmJ6H7GnmAFmj3HlmeTGWb90h94SC17YNUa5xHZK/mEvW0O0XqaIMaAyTGjqQBejIeOk3ZlnYAyPsoayQmsR52Vj27jbXZRzL+qmZpBxkGipjpbQRD50BiIuvzM49qZ2P0qaCukWa4Z7LydIS81tvAeW8RoQOUU+gaZbhEQ8hUS7QvfuqpC8r21OXTWaA2ZYjSaRij3GcgNOw+Q9mfl5wEIAlDE7TfQ21HKQBLpD40SMxl/y6Q+MD+qWZQurikeJLrT3C8O4ZF1RTlYA+l/BZlVIFtMFJBUFqXqEM96tQsrGwj96iuF8gz5Ll9f1gbbGcX0G0LJysir4uzQxMJgNhAqcpbW/n7lrZJ4IO1u21pP9oAasMS9cDeIhtWMq5BXugByTtboYx+c32j9D5nYyKoSqPg7GzqH5pSUhYoDTi9GSCpuwFiT0I7xaAfwRCJN/ysX58dIrusZ0jSz4gvmTtDGQbi8xoU9Fih3mjzq3XvTPA+B5/C9Yhsd85Q268q8LrPUad6mFiZyEGg+vELJ6oghvm958UsGIXfauXzpHGGWi2yHBkarUdW7ne0LADqBfXC/eZ97evO6B9CLpKqI89wZfZJcB/IEqw2Qr0aXbACmbEbuU7m+oG6RC2UjbQ1QTx4OjM8dCC4Z1RAiRhIZQw6MiuCDzdITFCDrfDGPSK4DSSOzIoWhZwBDeqp7xlAhnH29lBK8Eu06X59z+jh4HmnxLdL0L2PbB7p3w163xqiyog2jLRRHz0ldIXqjacPd3DRScZ6pirOkCVaJWvqaL1DYi4H5NyeJY0DpD56lajrDt31W7gyXNDOUQ+izjQg86htU4p94SxrS+QD0O2PAx+cxtSg2ws/pGyUF9G2M9i2a+cZ1LjfHGh+955Klyf2TGGGmLfIiyONeXmP5Mme2SV9Cei1KbPaGMR41pe0b5fIy34FPQJuuDB2ox04Qew5cBreIas85skqesjq7hT1xs5K7rH8sacpdfErHEj8yoPeEZOS+cBaCO6yU/YviMVU3Rhht6gThL2h1FWvVqqSR9dY77W9Q3GKchB6yNIT2QDS1zg6FTrg3Ia9QJ3EF4XpeT8yuuyvDgj549coDRJPVWDUftA7C/fadVOeFesU9luyXYJdje/NO9jhqBIFBJ/uRaCj7hz295bTDWLXmsJIzUCw77oQ1ecKjbHXytFtgP3eDbAuGmufr4rGovaMhkaDus+vgXfXd7bsBHHc/gSpU55QGsYFEkN0N9GnCymYegpXpxK2RburDJS7mL7uY0jMwAjliI6lYnoCDbqkbGLvSdkD5OAbjGA/JSOdPQzKedwib2YRczwf5TxFzhM7QR1h1QzCa+SMRXUYFtbuOTLTvLA08l2lXMNIqm5PUeYe6Hv7HCS/2OQCEXi94HfrCIePzl/eodPvCR+deLcDkxaiRtUL8qCq21qFqsY4QJENWSOn/iwCYq+RB4wpNEAZVOSZKwxF8KyVtZThQpXvjAPZBaVGeA5851FVot96VZd1hFJAZq6M8ke/77zJr75Dxzqi98VVU0zd9UhANVq8ROo77VAUTIwSSgDkaUbp4+cjyhmj6oHSxvQgRffe+3fs63evPcd0erzZa8/Iwqk8aGAzpAvoJRxKzKvQ8Vw4+dh8FL6INndm8p3eEJ/V9w+BbOwb++0F4kGIf3DXgcR0VadcizyiVJXEZ3l/coeDeC0Y5ZtXERop2zbzgHKWXBptfpGoMbcGh2NDAXQR34OK+HahkfcLjbwYE/SLsgESU7xkTKTxaFuX72aQmAfk6a770uqX08PTVCGCNPUdLVGe1DG9qFpgry8zWn3eXXxEzp3yYOc2KDtKZi3db481ktTNUB5qyfb5+oU/3o+g4PkMGAqTzggyNzqsQPHSVkf44N4WPYbuTMaE0D59ST0d9AU4jL2bSn+x8QXKVNAoCNjZm4Q3tTeqN48pa/xJ6vqI00UjdfTaRPYCnSv78SoSQHf4/sG88PqZU/ePcc9mJ01KFNN7ogTg7uD+jH0c3P9dJw6o16C6GshSrxLcSB1r1IE6IAuIl/Jr1AxtSwQnEyPD7yVWkwyAfKqQvp6hr0d4+DWNd1oo6FvUKlmT+gDjdRM0cqyLrhcPwheQJs487gkRPtOFkQxtR6E7mUAaiB6C/9/yGVNljvqov3fbmjR4JvmNmwekzt6jTBiI8CD3t2i3eY2VpXD05ZM2rI8sKDcoPbVof8bP4rfyUnfgJk5bw7oj1kMaEO603SDPJk+oBxslszXYNkGp0r7kbibf8eYmzTdk3eYfUAxRbrgQXioa5BkXLd7YCf/cQmjQPe0T5HcNN+7+udHkVSB/05tr23TSvF/Cb4wRumE3QG0Px8jODssQKmjkTZGE2IU7vj/c8Wbv7XfHLCXs45ila2Rvqgme9/nSEyAxlY1x2vnVq6ZBMicWyAPgZ0hkizwzoiM0gHxi9Z279lq02bBPcxTIUWb/GT7jRlgXJpFrB/H/Dd/KOxigVBfKINbFtE4eVAl5hgdV3qI8jpvQl+91hjAACXdPB0RTfnx2OpAPzdSzV7Yo7RDTpCigdKPVaXgL9d9FcQUHkXk/lwcogWOUg9MduZGx7yM3ureX8A7HhktZ4Pkzjju31/329HzECXgAPnF0NMCnfx2izUApukTojL2f/a4GlqHg7t31jPfMatnh4BPIAqirexT/WYf4KidGk46+1bmwvydkZrKftFdPyHs/QH7T1m8pQJ5jW3/kELgQh3wm4bEfjrnzKr7k/3vC4b0iUeHDsi0MV8hM38gn/08I7Y92mCc4EG026ArZMXhuxnPW9RBHEO6QZ4iul7j4HSMJWdv7j9y1JC8LJ0Ull0xqgntKfJcZn+t+a8cGQBc2aXAYYZPCqDPpjHhC7e/rsRZkcJtL54npDrapER1sAwjBrz2xpssDTtjHBlcF75o1QeWKaM+jy/H6jhwvVRfdv0I9ANe4W4W/3yr8NUcoFujWIB+8BgHaPYHW/+9tlSmjdYZQujilaRA5AN62qMt9KgTyiFamrJKZK5TRYjJHhSU63pX4NDaywfGfsvMZTqrrjnLFYb2f0h3x10Knx7u8R/N/zoJhKaqY2qsAAAAASUVORK5CYII=);
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
          max-width: 65rem;
          margin-top: 6rem;
          -webkit-text-stroke: 4px var(--clr-text-primary-dark);
          @media (max-width: 860px) {
            -webkit-text-stroke: 2px var(--clr-text-primary-dark);
            font-size: 3rem;
            line-height: 4.375rem;
            margin: 1.5rem 0 3.4375rem 0;
          }
          -webkit-text-fill-color: #fff;
        }
        .story {
          max-width: 38.3rem;
          @media (min-width: 860px) {
            margin-top: 10.5rem;
          }
          h3 {
            margin-bottom: 1.5rem;
          }
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
      }
    }
  }
}

.resume {
  h3 {
    margin-bottom: 1.5rem;
  }
  table {
    border-collapse: collapse;
    tr {
      border-bottom: 3px solid var(--clr-text-primary-dark);
      @media (max-width: 860px) {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 0;
      }
      @media (min-width: 860px) {
        height: 6.5rem;
        .year {
          width: 9rem;
        }
        .company {
          width: 24.9rem;
        }
      }
    }
  }
  .arrow-link {
    margin-top: 2rem;
    max-width: max-content;
  }
  .border-btn {
    margin-top: 9rem;
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
  .how {
    margin-bottom: 5rem;
    .container {
      align-items: flex-end;
      text-align: right;
    }
  }

  .cto:hover {
    background-color: var(--clr-text-primary-dark);
    color: #fff;
    img {
      filter: invert(100%);
    }
  }
}

.work-sample {
  .work-sample-container {
    position: relative;
    background-color: #f3f4f6;
    .container {
      position: relative;
      z-index: 10;
      display: flex;
      @media (max-width: 860px) {
        flex-direction: column-reverse;
      }
      .col-1 {
        @media (min-width: 860px) {
          margin-top: 10rem;
        }
      }
      .col-2 {
        @media (min-width: 860px) {
          margin-left: 2.5rem;
        }
        h2 {
          text-align: right;
          margin-bottom: 8.87rem;
          @media (max-width: 860px) {
            margin-bottom: 4.5rem;
          }
        }
      }
      .sample-col {
        .sample {
          display: block;
          margin-bottom: 9.75rem;
          @media (max-width: 860px) {
            margin-bottom: 3.75rem;
          }
          h4 {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
          }
          p {
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            font-weight: 400;
            @media (max-width: 860px) {
              font-size: 1rem !important;
              margin-bottom: 1rem;
            }
          }
          .image-container {
            overflow: hidden;
            border-radius: 1.25rem;
            margin-left: 2rem;
            img {
              max-width: 100%;
              height: auto;
              object-fit: cover;
              transition: transform 0.5s ease;
              vertical-align: top;
            }
          }
          &:hover {
            .image-container {
              img {
                transform: scale(1.07);
              }
            }
          }
        }
      }
    }
    .lines {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 5;
      width: 100%;
      display: flex;
      justify-content: space-around;
      @media (max-width: 860px) {
        display: none;
      }
      hr {
        border: 0.5px solid #828282;
        opacity: 0.1;
      }
    }
  }
}

.youtube {
  .container {
    @media (max-width: 860px) {
      text-align: right;
    }
    .info {
      margin-left: auto;
      max-width: 37rem;
      .arrow-link {
        max-width: max-content;
      }
      @media (max-width: 860px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
}
</style>
