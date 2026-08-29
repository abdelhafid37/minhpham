import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const OVERLAY_DURATION = 500;

export default function ResizingOverlay() {
  const overlayRef = useRef(null);
  const timeoutId = useRef(null);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      if (!overlay) return;

      function handleResize() {
        if (timeoutId.current) clearTimeout(timeoutId.current);

        gsap.to(overlay, {
          autoAlpha: 1,
          zIndex: 9999,
          pointerEvents: "auto",
          ease: "power3.out",
          duration: 0.2,
        });

        timeoutId.current = setTimeout(() => {
          gsap.to(overlay, {
            autoAlpha: 0,
            zIndex: -1,
            pointerEvents: "none",
            ease: "power3.out",
            duration: 0.5,
          });
        }, OVERLAY_DURATION);
      }

      window.addEventListener("resize", handleResize);

      return () => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        window.removeEventListener("resize", handleResize);
      };
    },
    {
      scope: overlayRef,
    },
  );

  return (
    <div ref={overlayRef} className="fixed size-full bg-black -z-1 opacity-0" />
  );
}
