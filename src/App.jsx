import { BrowserRouter } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { LenisAnchorsScroll } from "./components/LenisAnchorsScroll";

const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    let animationFrame;

    const update = (time) => {
      lenisRef.current?.lenis?.raf(time);
      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, []);
  return (
    <BrowserRouter>
      <ReactLenis
      root
        options={{
          autoRaf: false,
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
          smoothTouch: false
        }}
        ref={lenisRef}
      >
        <LenisAnchorsScroll/>
        <main className="relative z-0 bg-[#170025]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Works />
          <Experience />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </main>
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;
{
  /* </ReactLenis> */
}
