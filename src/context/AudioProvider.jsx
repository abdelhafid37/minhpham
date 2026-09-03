import { useState } from "react";
import { AudioContext } from "./AudioContext";

export default function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AudioContext.Provider
      children={children}
      value={{
        isPlaying,
        setIsPlaying,
      }}
    />
  );
}
