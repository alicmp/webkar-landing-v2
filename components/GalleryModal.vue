<template>
  <div class="modal-bg show-image-modal" ref="galleryItemModal">
    <i class="material-icons clickable close-icon md-36" @click="hideModal">close</i>
    <div class="image-container">
      <img v-if="!item.type" class="gallery-item" :src="item.image" alt />
      <video-player v-if="item.type == 'vid'" class="gallery-item video" :src="item.src"/>
      <h3>{{item.title}}</h3>
    </div>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'

require('nuxt-video-player/src/assets/css/main.css')

export default {
  components: {
    VideoPlayer
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    showModal() {
      this.$refs.galleryItemModal.classList.add("modal-bg-active");
    },
    hideModal() {
      this.$refs.galleryItemModal.classList.remove("modal-bg-active");
      this.$emit('forceStopVideo');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-bg {
  background-color: rgba($color: #000000, $alpha: 0.9);
  display: flex;
  align-items: center;
  .close-icon {
    position: absolute;
    top: 40px;
    right: 40px;
    color: white;
  }
  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .gallery-item {
      max-width: 80%;
      height: auto;
      max-height: 80vh;
      object-fit: contain;
    }
    .video {
      width: 60vw;
      @media (max-width: 680px) {
        width: 90vw;
      }
    }
    h3 {
      color: white;
      padding-top: 4rem;
      font-size: 2rem;
    }
  }
}
</style>