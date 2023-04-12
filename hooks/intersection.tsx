'use client';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

const INTERSECTION_OPTIONS = {
  rootMargin: '-40% 0px',
  threshold: [0, 0.5, 1],
};

const useIntersectionObservation = (
  setActiveId: Dispatch<SetStateAction<string | null>>,
  CONTENT_SELECTOR: string,
  options = INTERSECTION_OPTIONS
) => {
  const contentRef = useRef(new Map());

  useEffect(() => {
    const callback = (observedContent: IntersectionObserverEntry[]) => {
      observedContent.forEach((content: IntersectionObserverEntry) => {
        contentRef.current.set(content.target.id, content);
      });

      const visibleContent = [...contentRef.current.values()].filter(
        (content: IntersectionObserverEntry) => content.isIntersecting
      );

      const newId = visibleContent[0]?.target.id;
      setActiveId(newId);
    };

    const observer = new IntersectionObserver(callback, options);

    const contents = Array.from(document.querySelectorAll(CONTENT_SELECTOR));
    contents.forEach((content) => observer.observe(content));

    return () => observer.disconnect();
  }, [setActiveId, CONTENT_SELECTOR, options]);
};

export default useIntersectionObservation;
