import ReactLenis from "lenis/react";
import BaseLayer from "./layout/BaseLayer";
import MaskLayer from "./layout/MaskLayer";

function App() {
  return (
    <ReactLenis root>
      <main>
        <BaseLayer />
        <MaskLayer />
      </main>
    </ReactLenis>
  );
}

export default App;
