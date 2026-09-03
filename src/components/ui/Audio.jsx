import useAudio from "@/hooks/useAudio";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Audio() {
  const { isPlaying } = useAudio();
  const audioRef = useRef(null);

  useGSAP(() => {
    const audio = audioRef.current;
    if (!audio) return;

    gsap.killTweensOf(audio);

    if (isPlaying) {
      audio.play().catch((err) => console.log("Playback blocked:", err));

      gsap.to(audio, {
        volume: 1,
        ease: "expo.out",
        duration: 1.5,
        overwrite: "auto",
      });
    } else {
      gsap.to(audio, {
        volume: 0,
        ease: "power2.inOut",
        duration: 1.8,
        overwrite: "auto",
        onComplete: () => audio.pause(),
      });
    }

    return () => gsap.killTweensOf(audio);
  }, [isPlaying]);

  return <audio ref={audioRef} src="/audio/track.mp3" loop></audio>;
}
