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
import Audio from "./components/ui/Audio";
import AudioProvider from "./context/AudioProvider";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ReactLenis root>
      <IntroProvider>
        <AudioProvider>
          {/* <Preloader /> */}
          <Header />
          <main>
            <FakeLayer />
            {/* <TrueLayer /> */}
          </main>
          <Footer />
          <ResizingOverlay />
          <Audio />
        </AudioProvider>
      </IntroProvider>
    </ReactLenis>
  );
}

export default App;
