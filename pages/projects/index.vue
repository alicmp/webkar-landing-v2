<template>
  <div>
    <div class="lines">
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>

    <header>
      <div class="container">
        <h1>Works</h1>
      </div>
    </header>

    <div class="container">
      <div class="works-gallery">
        <div class="tags">
          <button
            v-for="tag in tags"
            :key="tag.code"
            @click="selectedTag = tag.code"
            class="tag"
            :class="{ selected: tag.code == selectedTag }"
          >
            {{ tag.title }}
          </button>
        </div>
        <div class="gallery">
          <a
            class="work"
            v-for="work in works"
            :key="work.title"
            :href="work.link"
            :class="{
              show: work.tag == selectedTag || selectedTag == 'ALL',
            }"
          >
            <img :src="work.image" :alt="work.title" />
            <h4>{{ work.title }}</h4>
          </a>
        </div>
      </div>
    </div>

    <div class="container">
      <a href="mailto:hi@webkar.xyz" class="cto">
        Let’s talk about work
        <img src="@/assets/img/icon/arrow-right.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTag: "ALL",
      tags: [
        {
          title: "All",
          code: "ALL",
        },
        {
          title: "UI/UX",
          code: "UIUX",
        },
        {
          title: "Icongaraphy",
          code: "ICON",
        },
        {
          title: "Logo",
          code: "LOGO",
        },
        {
          title: "Illustration",
          code: "ILLUS",
        },
        {
          title: "Animation",
          code: "ANI",
        },
      ],
      works: [
        {
          image: require("@/assets/img/works/1-interiorsolutions.jpg"),
          title: "Interior soloution",
          tag: "UIUX",
          link: '/projects/interior-solution'
        },
        {
          image: require("@/assets/img/works/3-fitto.jpg"),
          title: "Fittoeco Tourisem",
          tag: "UIUX",
          link: '/projects/fittoeco'
        },
        {
          image: require("@/assets/img/works/2-ddlock.jpg"),
          title: "DD-Lock",
          tag: "UIUX",
          link: '/projects/ddlock'
        },
        {
          image: require("@/assets/img/works/6-kalaraad.jpg"),
          title: "Kala Raad",
          tag: "UIUX",
          link: '/projects/kala-raad'
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
body::-webkit-scrollbar {
  width: 1em;
}

/* Track */
body::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
body::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

/* Handle on hover */
body::-webkit-scrollbar-thumb:hover {
  background: #bbb;
}
header {
  .container {
    h1 {
      margin-top: 60px;
      padding: 5rem 0;
    }
  }
}
.works-gallery {
  .tags {
    width: max-content;
    margin: auto;
    margin-bottom: 5rem;
    @media (max-width: 680px) {
      margin-bottom: 2rem;
      width: 100%;
      overflow-x: auto;
      display: flex;
      padding-bottom: 1rem;
      /* width */
      &::-webkit-scrollbar {
        height: 0.25rem;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 10px;
      }

      &:hover, &:focus {
        &::-webkit-scrollbar-thumb {
          background: #ccc;
        }
      }
    }
    button {
      display: inline-block;
      background-color: transparent;
      border: none;
      padding-bottom: 0.5rem;
      color: #818080;
      font-size: 1rem;
      line-height: 1.5rem;
      cursor: pointer;
      &:hover {
        border-bottom: 4px solid #392020;
      }
    }
    .selected {
      color: #252525;
      border-bottom: 4px solid #392020;
    }
  }
  .tags > * + * {
    margin-left: 2rem;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 2rem;
    @media (min-width: 680px) {
      row-gap: 4rem;
    }
    .work {
      display: none;
      img {
        border-radius: 5px;
        transition: transform 0.5s ease;
      }
      h4 {
        @media (min-width: 680px) {
          margin-top: 1.5rem;
        }
        font-size: 28px;
      }
      &:hover {
        img {
          transform: scale(1.07);
        }
      }
    }
    .show {
      display: block;
    }
  }
}
.cto {
  margin: auto;
  margin-top: 9rem;
  margin-bottom: 9rem;
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
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
    background-color: var(--clr-text-primary-dark);
    color: #fff;
    img {
      display: none;
    }
  }
}
</style>