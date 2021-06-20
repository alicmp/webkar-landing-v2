<template>
  <div>
    <header>
      <div class="container">
        <h1>
          We Design <span class="text-primary-light">&</span> Develop Your Ideas
        </h1>
        <hr />
        <p>
          We design, create engaging and memorable digital experiences. We help
          our customers create minimal solutions that improve the daily lives of
          humans by being ever more unique, creative and sustainable.
        </p>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 7.5rem;
    line-height: 11.25rem;
    max-width: 1100px;
  }
  hr {
    border: 3px solid var(--clr-lines);
    margin: 2rem 0;
  }
  hr, p {
    max-width: 37rem;
  }
}
</style>
