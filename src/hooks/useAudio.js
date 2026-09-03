import { AudioContext } from "@/context/AudioContext";
import { useContext } from "react";

export default function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within a AudioProvider.");

  return context;
}
