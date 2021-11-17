<template>
  <div class="modal-bg show-image-modal" ref="galleryItemModal">
    <i class="material-icons clickable close-icon md-36" @click="toggleModal">close</i>
    <div class="image-container">
      <img class="gallery-item" :src="item.image" alt />
      <h3>{{item.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    toggleModal() {
      this.$refs.galleryItemModal.classList.toggle("modal-bg-active");
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
    h3 {
      color: white;
      padding-top: 4rem;
      font-size: 2rem;
    }
  }
}
</style>