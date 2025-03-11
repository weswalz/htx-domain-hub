
import { useEffect, useState, useCallback } from "react";

// Use for triggering animations when element is in viewport
export const useInView = (
  ref: React.RefObject<HTMLElement>,
  options = { threshold: 0.1, triggerOnce: true }
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) {
          observer.unobserve(currentRef);
        }
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, {
      threshold: options.threshold,
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options.threshold, options.triggerOnce]);

  return inView;
};

// Use for lazy loading images with blur effect
export const useLazyImage = (src: string) => {
  const [imageSrc, setImageSrc] = useState("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src]);

  return { imageSrc, imageLoaded };
};

// Use for staggered animations of lists
export const useStaggered = (total: number, baseDelay = 100) => {
  return useCallback(
    (index: number) => {
      return {
        animationDelay: `${baseDelay * index}ms`,
      };
    },
    [total, baseDelay]
  );
};

// Text scramble effect (Matrix-like)
export function useTextScramble(text: string, duration = 2000) {
  const [output, setOutput] = useState("");
  const characters = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.floor(duration / 30);
    const counter = Math.floor(totalFrames / text.length);
    let finished = false;

    const update = () => {
      let newOutput = "";
      let complete = 0;
      
      for (let i = 0; i < text.length; i++) {
        if (frame >= counter * i + counter) {
          complete++;
          newOutput += text[i];
        } else if (frame >= counter * i) {
          const charIndex = Math.floor(Math.random() * characters.length);
          newOutput += characters[charIndex];
        } else {
          newOutput += " ";
        }
      }
      
      setOutput(newOutput);
      
      if (complete === text.length) {
        finished = true;
      }
    };

    const interval = setInterval(() => {
      update();
      frame++;
      
      if (finished) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, duration]);

  return output;
}
