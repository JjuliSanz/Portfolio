import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "./Loader";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Holo } from "./canvas/Holo";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState('');

  useEffect(() => {
    // Add listeners for changes to the screen size at three breakpoints
    const mediaQuery1024 = window.matchMedia("(max-width: 1024px)");
    const mediaQuery1280 = window.matchMedia("(max-width: 1280px)");
    const mediaQuery1536 = window.matchMedia("(max-width: 1536px)");
  
    // Set the initial value of the `isMobile` state variable
    setIsMobile(
      mediaQuery1024.matches
        ? "max1024"
        : mediaQuery1280.matches
        ? "max1280"
        : "max1536"
    );
  
    // Define a callback function to handle changes to the media query at 1024
    const handleMediaQueryChange1024 = (event) => {
      setIsMobile(
        event.matches
          ? "max1024"
          : mediaQuery1280.matches
          ? "max1280"
          : "max1536"
      );
    };
  
    // Add the callback function as a listener for changes to the media query at 1024
    mediaQuery1024.addEventListener("change", handleMediaQueryChange1024);
  
    // Define a callback function to handle changes to the media query at 1280
    const handleMediaQueryChange1280 = (event) => {
      setIsMobile(
        event.matches
          ? "max1280"
          : mediaQuery1024.matches
          ? "max1024"
          : "max1536"
      );
    };
  
    // Add the callback function as a listener for changes to the media query at 1280
    mediaQuery1280.addEventListener("change", handleMediaQueryChange1280);
  
    // Define a callback function to handle changes to the media query at 1536
    const handleMediaQueryChange1536 = (event) => {
      setIsMobile(
        event.matches
          ? "max1536"
          : mediaQuery1024.matches
          ? "max1024"
          : "max1280"
      );
    };
  
    // Add the callback function as a listener for changes to the media query at 1536
    mediaQuery1536.addEventListener("change", handleMediaQueryChange1536);
  
    // Remove the listeners when the component is unmounted
    return () => {
      mediaQuery1024.removeEventListener("change", handleMediaQueryChange1024);
      mediaQuery1280.removeEventListener("change", handleMediaQueryChange1280);
      mediaQuery1536.removeEventListener("change", handleMediaQueryChange1536);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col xl:flex-row">
      <div className={`pt-36 w-full xl:w-1/2 mx-auto pl-6 flex flex-row gap-5 justify-center xl:justify-start`}>
        {/* vertical line start */}
        <div className="flex flex-col  items-center ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" /> {/* Circle */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />{" "}
          {/* Vertical Line */}
        </div>

      {/* Hero Text */}
        <div>
          <h1
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
          >
            Hi, I'm <span className="text-[#915eff]">Julian</span>
          </h1>
          <p
            className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
          >
            I develop front, back and full-stack{" "}
            <br className="sm:block hidden" /> web applications.
          </p>
        </div>
      </div>
      {/* Model 3d */}
      <div className="w-full xl:w-1/2 h-[300px] xl:h-[600px] absolute top-[400px] xl:static cursor-grab">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false}/>
            <Holo scale={isMobile === 'max1024'? 2.2 : isMobile === 'max1280' ? 2.5 : 1.6} />
            <EffectComposer>
              <Bloom
                intensity={1}
                luminanceThreshold={0.1}
                luminanceSmoothing={0.5}
              />
            </EffectComposer>           
          </Suspense>
        </Canvas>     
      </div>
      {/* Scroll icon */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Go to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }} // Animate the vertical movement of the icon
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }} // Set the animation properties
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
