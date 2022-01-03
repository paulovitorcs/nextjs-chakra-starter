import { useCallback, useEffect, useState } from 'react';

export const useScroll = (scrollLimit = 400, scrollActive = 100) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasScroll, setHasScroll] = useState(false);
  const isReseted = scrollPosition >= scrollActive;

  const handleWindowScroll = useCallback(() => {
    setScrollPosition(window.scrollY);

    if (window.scrollY >= scrollLimit) {
      setHasScroll(true);
      return;
    }

    if (window.scrollY == 0) {
      setHasScroll(false);
      return;
    }
  }, [scrollLimit]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
  }, [handleWindowScroll]);

  return {
    scrollLimit,
    scrollPosition,
    hasScroll,
    isReseted,
  };
};
