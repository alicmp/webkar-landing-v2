<template>
  <article>
    <div class="lines">
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>

    <header>
      <img
        src="@/assets/img/projects/webkar/webkar.jpg"
        alt="Webkaar"
        class="anim large-image"
      />
    </header>

    <div class="container anim">
      <div class="text">
        <div class="mt-4">
          <h3>Introduction</h3>
          <p>
            Webkar is a platform for creating a website without any programming
            knowledge. The goal of this startup was to simplify the process of
            creating a website and reduce time and cost for every small business
            owner. My goal for this project was to simplify the process and design
            a user-friendly UI based on the user's experience.
          </p>
          </div>
          <div class="mt-4">
            <h3>Duration</h3>
            <p>
              4 months
            </p>
          </div>
          <div class="mt-4">
            <h3>Tools</h3>
            <p>
              <ul>
                <li>
                Figma
                </li>
                <li>
                Photoshop
                </li>
                <li>
                Illustrator
                </li>
              </ul>
            </p>
          </div>
          <div class="mt-4">
            <h3>Role</h3>
            <p>UX/UI designer</p>
          </div>
          <div class="mt-4">
            <h3>Challenges</h3>
            <p>
              <ul>
                <li>
                  review similar
                platforms both in Iran and abroad to find their weakness and strength.
                </li>
                <li>
                  Simplify the user experience for working with the dashboard and
                editor.
                </li>
              </ul>
            </p>
          </div>
      </div>
    </div>

    <div class="container anim">
      <img
        src="@/assets/img/projects/webkar/webkar-1.jpg"
        alt="Webkaar Design"
        class="large-image mt-4"
      />
    </div>

    <div class="container">
      <div class="text full-height-text pull-right anim mt-4">
        <h3>My Workflow</h3>
        <p>
          In the beginning, I analyzed similar platforms, categorized priorities for the job,
          and designed the user flow in addition to the low-fidelity wireframe.
        </p>
      </div>
      <div class="full-width-image anim mt-2">
        <img
          src="@/assets/img/projects/webkar/user-flow-1.jpg"
          alt="Webkaar User Flow"
          class="large-image"
        />
      </div>
    </div>

    <div class="container">
      <div class="text full-height-text anim mt-4">
        <p>
            Next, I worked on Webkar's branding including choosing the typeface,
          designing the logo and color pallet.
          </p>
      </div>
      <div class="full-width-image anim mt-2">
        <img
          src="@/assets/img/projects/webkar/webkaar-2.jpg"
          alt="Webkaar Design"
          class="item-1 large-image anim"
        />
      </div>
      <div class="two-row-image anim mt-2">
        <img
          src="@/assets/img/projects/webkar/webkaar-logo.jpg"
          alt="Webkaar Logo"
          class="item-3 anim"
        />
        <img
          src="@/assets/img/projects/webkar/webkaar-3.jpg"
          alt="Webkaar Design"
          class="item-2 anim"
        />
      </div>
    </div>


    <div class="container">
      <div class="text full-height-text pull-right anim mt-4">
        <p>After taking care of the color
          pallet and font I started to create the UI Kit and design the
          components and pages. All pages (except the editor) are designed in 3
          sizes (Full HD, HD, Mobile). I worked closely with developers to
          ensure everything was going as we planned.</p>
      </div>
      <div class="full-width-image anim mt-2">
        <img
          src="@/assets/img/projects/webkar/webkaar-component.jpg"
          alt="Webkaar Components"
          class="item-1 large-image anim"
        />
      </div>
      <div class="two-row-image anim mt-2">
        <img
          src="@/assets/img/projects/webkar/webkaar-logo.jpg"
          alt="Webkaar Logo"
          class="item-3 anim"
        />
        <img
          src="@/assets/img/projects/webkar/webkaar-3.jpg"
          alt="Webkaar Design"
          class="item-2 anim"
        />
      </div>
    </div>

    <div class="container">
      <div class="text full-height-text anim mt-4">
        <p>
            Finally, I started user
          testing with five candidates and gathered user data. With help of
          developers, we analyzed the user's behavior to choose the best method
          and increased user's satisfaction.
          </p>
      </div>
    </div>
    
  </article>
</template>

<script>
import animateOnScrollMixin from "@/mixins/animateOnScrollMixin";
export default {
  mixins: [animateOnScrollMixin],
  head() {
    return {
      title: `Webkaar - Projects - Sahar Hatami`,
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
article {
  position: relative;
  margin-top: 60px;
}
@media (min-width: 860px) {
  h3 {
    font-weight: 600;
    font-size: 52px;
    line-height: 94px;
  }
}
.text {
  max-width: 838px;
  p {
    margin-top: 1rem;
  }
}
.full-height-text {
  padding: 10.43rem 0 6.37rem 0;
  @media (max-width: 860px) {
    padding: 3rem 0 2.5rem 0;
  }
}
.two-row-image {
  display: grid;
  gap: 2rem;
  grid-auto-flow: column;
  @media (max-width: 860px) {
    grid-auto-flow: row;
  }
}
.pull-right {
  margin-left: auto;
}
.pull-left {
  margin-right: auto;
}
.image-gallery {
  display: grid;
  gap: 1rem;
  @media (min-width: 860px) {
    gap: 3.5rem;
    .item-1 {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .item-2 {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    .item-3 {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
}
.large-image {
  min-height: 30vh;
}
</style>