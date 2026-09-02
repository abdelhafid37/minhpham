import ReactLenis from "lenis/react";
import IntroProvider from "./context/IntroProvider";
import gsap from "gsap";
// import Preloader from "./components/ui/Preloader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ResizingOverlay from "./components/ui/ResizingOverlay";
import FakeLayer from "./components/layout/FakeLayer";
// import TrueLayer from "./components/layout/TrueLayer";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ReactLenis root>
      <IntroProvider>
        {/* <Preloader /> */}
        <Header />
        <main>
          <FakeLayer />
          {/* <TrueLayer /> */}
        </main>
        <Footer />
        <ResizingOverlay />
      </IntroProvider>
    </ReactLenis>
  );
}

export default App;
