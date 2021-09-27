<template>
  <div>
    <div class="lines">
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>

    <header class="anim">
      <div class="container">
        <h1>Works</h1>
      </div>
    </header>

    <div class="container">
      <div class="works-gallery">
        <div class="tags anim">
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
            class="work anim"
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

    <div class="container anim">
      <a href="mailto:hi@webkar.xyz" class="border-btn">
        Let’s talk about you
        <img src="@/assets/img/icon/arrow-right.png" />
      </a>
    </div>
  </div>
</template>

<script>
import animateOnScrollMixin from "@/mixins/animateOnScrollMixin";

export default {
  mixins: [animateOnScrollMixin],
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
          image: require("@/assets/img/works/6-webkar.jpg"),
          title: "Webkaar",
          tag: "UIUX",
          link: "/projects/webkaar",
        },
        {
          image: require("@/assets/img/works/1-interiorsolutions.jpg"),
          title: "Interior soloution",
          tag: "UIUX",
          link: "/projects/interior-solution",
        },
        {
          image: require("@/assets/img/works/3-fitto.jpg"),
          title: "Fittoeco Tourisem",
          tag: "UIUX",
          link: "fitto-eco",
        },
        {
          image: require("@/assets/img/works/2-ddlock.jpg"),
          title: "DD-Lock",
          tag: "UIUX",
          link: "/projects/ddlock",
        },
      ],
    };
  },
  head() {
    return {
      title: `Projects - Sahar Hatami`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "I design (UI/UX) your ideas and make them reality.",
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

      &:hover,
      &:focus {
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
    gap: 2rem;
    @media (min-width: 680px) {
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
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
.border-btn {
  margin-top: 10rem;
}
</style>