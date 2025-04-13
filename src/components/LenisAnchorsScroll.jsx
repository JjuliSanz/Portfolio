import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export const LenisAnchorsScroll = () => {
  const lenis = useLenis();

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target || !lenis) return;

      const hash = target.getAttribute('href');
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [lenis]);

  return null;
};
