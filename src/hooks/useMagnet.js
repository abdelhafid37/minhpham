import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 *
 * @param {*} damping (optional) the higher the value, the stickier it gets
 * @returns mutable reference object
 */
export default function useMagnet({ damping = 0.12 } = {}) {
  const ref = useRef(null);
  const mouseRef = useRef({
    current: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
  });

  useGSAP(
    () => {
      const target = ref.current;
      if (!target) return;

      const mouse = mouseRef.current;
      const center = { x: 0, y: 0 };
      const clamp = { x: null, y: null };
      const lerp = gsap.utils.interpolate;
      const quickSet = {
        x: gsap.quickSetter(target, "x", "px"),
        y: gsap.quickSetter(target, "y", "px"),
      };

      function updateRect() {
        const rect = target.getBoundingClientRect();
        center.x = rect.left + rect.width / 2;
        center.y = rect.top + rect.height / 2;
        clamp.x = gsap.utils.clamp(-rect.width / 2, rect.width / 2);
        clamp.y = gsap.utils.clamp(-rect.height / 2, rect.height / 2);
      }

      updateRect();

      function handleMove(e) {
        mouse.target.x = clamp.x(e.clientX - center.x);
        mouse.target.y = clamp.y(e.clientY - center.y);
      }

      function handleLeave() {
        mouse.target.x = 0;
        mouse.target.y = 0;
      }

      function animate() {
        const ratio = gsap.ticker.deltaRatio();
        const progress = 1 - Math.pow(1 - damping, ratio);
        mouse.current.x = lerp(mouse.current.x, mouse.target.x, progress);
        mouse.current.y = lerp(mouse.current.y, mouse.target.y, progress);

        quickSet.x(mouse.current.x);
        quickSet.y(mouse.current.y);
      }

      target.addEventListener("mouseenter", updateRect);
      target.addEventListener("mousemove", handleMove);
      target.addEventListener("mouseleave", handleLeave);

      gsap.ticker.add(animate);

      return () => {
        target.removeEventListener("mouseenter", updateRect);
        target.removeEventListener("mousemove", handleMove);
        target.removeEventListener("mouseleave", handleLeave);

        gsap.ticker.remove(animate);
      };
    },
    {
      scope: ref,
      dependencies: [damping],
    },
  );

  return ref;
}
