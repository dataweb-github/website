import { useEffect, useRef } from "react";

export default function useReveal(options = {}) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, ...options }
        );
        const nodes = el.querySelectorAll("[data-reveal]");
        nodes.forEach((n, i) => {
            n.style.animationDelay = `${i * 90}ms`;
            n.classList.add("reveal");
            io.observe(n);
        });
        return () => io.disconnect();
    }, [options]);
    return ref;
}
