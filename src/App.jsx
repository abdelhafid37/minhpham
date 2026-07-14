import ReactLenis from "lenis/react";
import IntroProvider from "./context/IntroProvider";
import Preloader from "./components/ui/Preloader";

function App() {
  return (
    <ReactLenis root>
      <IntroProvider>
        <Preloader />
      </IntroProvider>
    </ReactLenis>
  );
}

export default App;
