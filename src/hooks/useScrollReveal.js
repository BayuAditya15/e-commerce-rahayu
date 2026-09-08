import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.08, rootMargin = '0px 0px -40px 0px') {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility on enter & exit for continuous smooth scroll animation
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
