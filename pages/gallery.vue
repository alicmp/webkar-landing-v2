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
        <h1>Gallery</h1>
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
            :key="work.image"
            :class="[
              work.tag == selectedTag ? 'show' : '',
              work.class
            ]"
            @click="showItem(work)"
          >
            <img :src="work.image" :alt="work.title" />
          </a>
        </div>
      </div>
    </div>

    <div class="container anim">
      <a href="mailto:hatami.sahar.91@gmail.com" class="border-btn">
        Let’s talk about you
        <img src="@/assets/img/icon/arrow-right.png" />
      </a>
    </div>

    <GalleryModal :item="selectedItem" ref="gModal" v-on:forceStopVideo="forceStopVideo" />
  </div>
</template>

<script>
import animateOnScrollMixin from "@/mixins/animateOnScrollMixin";
import GalleryModal from "@/components/GalleryModal";

export default {
  mixins: [animateOnScrollMixin],
  components: {
    GalleryModal,
  },
  data() {
    return {
      selectedItem: {},
      selectedTag: "UI",
      tags: [
        {
          title: "UI Design",
          code: "UI",
        },
        {
          title: "Logo",
          code: "LOGO",
        },
        {
          title: "Motion",
          code: "MOT",
        },
        {
          title: "Other",
          code: "OTH",
        },
      ],
      works: [
        {
          image: require("@/assets/img/gallery/neshiman.jpg"),
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/ddlock-1.jpg"),
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/ddlock-2.jpg"),
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/ddlock-3.jpg"),
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/ddlock-mobile.jpg"),
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/1-interiorsolutions.jpg"),
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/2-interiorsolutions.jpg"),
          tag: "UI",
        },
        {
          image: require("@/assets/img/logo/webkaar-logo.jpg"),
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/logo/ddlock-logo.jpg"),
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/logo/mahour-logo.jpg"),
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/logo/dr-logo.jpg"),
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/logo/tavvandad.jpg"),
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/gallery/egypt.jpg"),
          src: '/Egypt_by Sahar_Hatami.mp4',
          tag: "MOT",
          type: 'vid',
        },
        {
          image: require("@/assets/img/gallery/weblink.jpg"),
          src: '/weblink.mp4',
          tag: "MOT",
          type: 'vid',
        },
        {
          image: require("@/assets/img/gallery/other/illus-2-1.jpg"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/other/illus-2-2.jpg"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/other/illus-2-3.jpg"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/other/fitto-trip-1.jpg"),
          tag: "OTH",
          class: 'work-large'
        },
        {
          image: require("@/assets/img/gallery/other/fitto-1.jpg"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/other/fitto-2.jpg"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/other/fitto-3.jpg"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/other/fitto-4.jpg"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/other/egypt-1.jpg"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/other/fitto-trip-2.jpg"),
          tag: "OTH",
          class: 'work-large'
        },
      ],
    };
  },
  methods: {
    showItem(item) {
      this.selectedItem = item;
      this.$refs.gModal.showModal();
    },
    forceStopVideo() {
      this.selectedItem = {}
    }
  },
  created() {
    if (this.$route.query.category) {
      this.selectedTag = this.$route.query.category;
    }
  },
  head() {
    return {
      title: `Gallery - Sahar Hatami`,
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
      @media (min-width: 680px) {
        font-size: 1.225rem;
        font-family: var(--ff-accent), sans-serif;
      }
    }
    .selected {
      color: #252525;
      border-bottom: 4px solid #392020;
    }
  }
  .tags > * + * {
    margin-left: 2rem;
    @media (min-width: 680px) {
      margin-left: 4rem;
    }
  }
  .gallery {
    display: grid;
    gap: 2rem;
    @media (min-width: 680px) {
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      row-gap: 4rem;
    }
    .work-large {
      @media (min-width: 1400px) {
        grid-column: span 2;
      }
    }
    .work {
      display: none;
      img {
        border-radius: 5px;
        transition: transform 0.5s ease;
        cursor: pointer;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      &:hover {
        img {
          transform: scale(1.04);
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