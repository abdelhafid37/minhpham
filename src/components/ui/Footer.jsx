import { FOOTER } from "@/constants/content";
import Button from "./Button";

export default function Footer() {
  const { links } = FOOTER;

  return (
    <footer className="fixed bottom-0 left-0 w-full mix-blend-difference z-9">
      <ul className="fixed hidden md:block mt-top left-left md:left-left-md lg:left-left-lg bottom-bottom md:bottom-bottom-md lg:bottom-bottom-lg">
        {links.map(({ Icon, href, label }, i) => (
          <li key={`${label}-${i}`} className="mb-li last:mb-0">
            <a
              className="block leading-none p-li"
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon && <Icon className="size-6" />}
            </a>
          </li>
        ))}
      </ul>
      <Button />
    </footer>
  );
}
