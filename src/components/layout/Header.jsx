/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HEADER } from "@/constants/content";
import useMagnet from "@/hooks/useMagnet";
import TextFlip from "../ui/TextFlip";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { links, Logo } = HEADER;
  const logoRef = useMagnet();

  useGSAP(() => {
    links.forEach((link, index) =>
      ScrollTrigger.create({
        trigger: link.href,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      }),
    );
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-9 mix-blend-difference">
      <div className="fixed left-screen-x top-top md:left-screen-x-md md:top-top-md lg:top-top-lg lg:left-screen-x-lg mt-top">
        <a ref={logoRef} href="/" className="block">
          <Logo className="size-8 lg:size-12" />
        </a>
      </div>

      <div className="fixed right-screen-x top-top md:right-screen-x-md md:top-top-md lg:right-screen-x-lg lg:top-top-lg">
        <ul>
          {links.map((link, index) => (
            <li key={link.href}>
              <TextFlip href={link.href} label={link.label} isActive={true} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
