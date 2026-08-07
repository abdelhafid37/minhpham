import ReactLenis from "lenis/react";
import IntroProvider from "./context/IntroProvider";
import Header from "./components/ui/Header";
import gsap from "gsap";
// import Preloader from "./components/ui/Preloader";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ReactLenis root>
      <IntroProvider>
        {/* <Preloader /> */}
        <Header />
      </IntroProvider>
    </ReactLenis>
  );
}

export default App;
