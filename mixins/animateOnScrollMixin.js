export default {
  mounted() {
    const elements = document.querySelectorAll(".anim");

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    }

    const animateOnScrollObserver = new IntersectionObserver(
      (entries, animateOnScrollObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = `anim1 1.5s forwards ease-in`;
            animateOnScrollObserver.unobserve(entry.target);
          } else {
            entry.target.style.animation = "none";
          }
        });
      }, options
    );

    elements.forEach((el) => {
      animateOnScrollObserver.observe(el);
    });
  },
}