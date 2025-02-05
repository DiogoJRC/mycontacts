import { useEffect, useRef, useState } from "react";

export default function useAnimatedUnmount(visible) {
  const [shouldRender, setShouldRender] = useState(visible);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const refElement = animatedElementRef.current;

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    if (visible) {
      setShouldRender(true);
    } else if (!visible && refElement) {
      refElement.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (refElement) {
        refElement.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [visible]);

  return { shouldRender, animatedElementRef };
}
