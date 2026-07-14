import * as React from "react";
import { IntroContext } from "@/context/IntroContext";

function useIntro() {
  const context = React.useContext(IntroContext);
  if (!context)
    throw new Error("useIntro must be used within an IntroProvider");

  return context;
}

export default useIntro;
