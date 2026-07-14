import * as React from "react";
import { IntroContext } from "./IntroContext";

function IntroProvider({ children }) {
  const [isStarted, setIsStarted] = React.useState(false);

  return (
    <IntroContext.Provider value={{ isStarted, setIsStarted }}>
      {children}
    </IntroContext.Provider>
  );
}

export default IntroProvider;
