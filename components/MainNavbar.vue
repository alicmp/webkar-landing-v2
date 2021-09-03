<template>
  <nav class="main-nav">
    <div class="container">
      <a class="title" href="/">Webkar</a>
      <ul class="links gap-md">
        <li><nuxt-link exact to="/projects">projects</nuxt-link></li>
        <li><nuxt-link exact to="/contacts">Contact</nuxt-link></li>
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
      font-size: 1.5rem;
      font-family: var(--ff-accent), sans-serif;
    }
    .logo {
      height: 40px;
    }
    ul {
      display: flex;
      list-style-type: none;
      li {
        a {
          font-weight: 400;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          border: none;
          background-color: transparent;
          height: 60px;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          color: var(--clr-text-primary-dark);
          font-size: 14px;
        }
        a:hover,
        a:focus,
        .active,
        .nuxt-link-active,
        .nuxt-link-exact-active {
          opacity: 1;
          border-top: 6px solid var(--clr-text-primary-dark);
        }
      }
      & > * + * {
        margin-left: 1rem;
      }
    }
  }
}
</style>