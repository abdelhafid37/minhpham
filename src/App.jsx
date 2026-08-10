import ReactLenis from "lenis/react";
import IntroProvider from "./context/IntroProvider";
import Header from "./components/ui/Header";
import gsap from "gsap";
// import Preloader from "./components/ui/Preloader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/ui/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ReactLenis root>
      <IntroProvider>
        {/* <Preloader /> */}
        <Header />
        <Footer />
      </IntroProvider>
    </ReactLenis>
  );
}

export default App;
