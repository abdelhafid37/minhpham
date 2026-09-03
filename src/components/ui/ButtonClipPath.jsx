import { TextRingIcon, TouchIcon } from "../icons";

export default function ButtonClipPath() {
  return (
    <button className="block lg:hidden bottom-[2.1875rem] fixed z-4 left-[calc(50%_-_39px)] !outline-none">
      <span className="relative block">
        <span className="block animate-rotate-ring size-[78px]">
          <TextRingIcon className="inline-block pointer-events-none" />
        </span>
        <span className="absolute top-0 left-0 flex items-center justify-center size-full">
          <TouchIcon className="text-red" />
        </span>
      </span>
    </button>
  );
}
