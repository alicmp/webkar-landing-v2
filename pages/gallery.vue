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
            :class="{
              show: work.tag == selectedTag || selectedTag == 'ALL',
            }"
            @click="showItem(work)"
          >
            <img :src="work.image" :alt="work.title" />
            <h4>{{ work.title }}</h4>
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
          image: require("@/assets/img/gallery/neshiman.png"),
          title: "Neshiman",
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/ddlock-1.png"),
          title: "DD-Lock",
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/ddlock-2.png"),
          title: "DD-Lock",
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/ddlock-3.png"),
          title: "DD-Lock",
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/ddlock-mobile.png"),
          title: "DD-Lock Mobile",
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/1-interiorsolutions.jpg"),
          title: "Interior Solutions",
          tag: "UI",
        },
        {
          image: require("@/assets/img/gallery/6-kalaraad.jpg"),
          title: "Rad CMS",
          tag: "UI",
        },
        {
          image: require("@/assets/img/logo/webkaar-logo.jpg"),
          title: "Webkaar",
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/logo/ddlock-logo.jpg"),
          title: "Digital Door Lock",
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/logo/mahour-logo.jpg"),
          title: "Mahoor Carpet",
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/logo/dr-logo.jpg"),
          title: "Doctor Clinic",
          tag: "LOGO",
        },
        {
          image: require("@/assets/img/gallery/egypt.jpg"),
          src: '/Egypt_by Sahar_Hatami.mp4',
          title: "Egypt",
          tag: "MOT",
          type: 'vid',
        },
        {
          image: require("@/assets/img/gallery/weblink.jpg"),
          src: '/weblink.mp4',
          title: "Weblink",
          tag: "MOT",
          type: 'vid',
        },
        {
          image: require("@/assets/img/gallery/illus-1.png"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/illus-3.png"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/illus-4.png"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/illus-2-1.png"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/illus-2-2.png"),
          tag: "OTH",
        },
        {
          image: require("@/assets/img/gallery/illus-2-3.png"),
          tag: "OTH",
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
    .work {
      display: none;
      img {
        border-radius: 5px;
        transition: transform 0.5s ease;
        cursor: pointer;
      }
      h4 {
        @media (min-width: 680px) {
          margin-top: 1.5rem;
        }
        font-size: 14px;
        @media (min-width: 680px) {
          font-size: 1.65rem;
        }
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