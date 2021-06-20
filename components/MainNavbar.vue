<template>
  <nav class="main-nav">
    <div class="container">
      <a class="title" href="/">Webkar</a>
      <ul class="links gap-md">
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.light-icon {
  filter: invert(100%);
}
.main-nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  .container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a.title {
      text-decoration: none;
      font-weight: 700;
      align-items: center;
      color: var(--text-dark);
      font-size: 18px;
    }
    .logo {
      height: 40px;
    }
    ul {
      display: flex;
      list-style-type: none;
      li {
        button {
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          border: none;
          background-color: transparent;
          padding: 0 0.5rem;
          height: 60px;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          color: var(--clr-primary);
          font-size  : 14px;
        }
        button:hover,
        button:focus {
          opacity: 1;
          border-top: 6px solid var(--clr-secondary);
        }
      }
    }
  }
}
</style>