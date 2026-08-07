import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function TextFlip({ href, label, isActive }) {
  const [shouldFlip, setShouldFlip] = useState(false);

  const textRef = useRef(null);
  const cloneRef = useRef(null);

  useGSAP(() => {
    const text = textRef.current;
    const clone = cloneRef.current;

    if (!text || !clone) return;

    const animateY = (element, y) =>
      gsap.to(element, { y, duration: 0.3, ease: "power3.out" });

    if (shouldFlip || isActive) {
      animateY(text, "-100%");
      animateY(clone, 0);
    } else {
      animateY(text, 0);
      animateY(clone, "100%");
    }

    return () => gsap.killTweensOf(text, clone);
  }, [shouldFlip, isActive]);

  return (
    <a
      onMouseOver={() => setShouldFlip(true)}
      onMouseLeave={() => setShouldFlip(false)}
      href={href}
      className="relative block font-sans font-bold leading-none text-right uppercase py-nav lg:py-nav-lg text-description"
    >
      <span className="block *:block relative clip-inset">
        <span ref={textRef} className="text-accent/50">
          {label}
        </span>
        <span
          ref={cloneRef}
          className="absolute top-0 right-0 translate-y-full"
        >
          {label}
        </span>
      </span>
    </a>
  );
}
