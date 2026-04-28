import { onBeforeUnmount, onMounted } from "vue";

export function useRevealOnScroll(selector = "[data-reveal]") {
  let revealObserver: IntersectionObserver | null = null;

  onMounted(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(selector);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealItems.forEach((item) => revealObserver?.observe(item));
  });

  onBeforeUnmount(() => {
    revealObserver?.disconnect();
  });
}
