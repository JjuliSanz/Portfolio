import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import { Hologram } from "./canvas/Hologram";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Holo } from "./canvas/Holo";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex">
      <div
        className={`pt-36 max-w-7xl mx-auto flex flex-row gap-5`}
      >
        {/* vertical line start */}
        <div className="flex flex-col  items-center ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" /> {/* Circle */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />{" "}
          {/* Vertical Line */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Julian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop front, back and full-stack{" "}
            <br className="sm:block hidden" /> web applications.
          </p>
        </div>
      </div>
    <div className="w-1/2">
      <Canvas camera={{ position:[0, 0, 5], }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1}/>
          <OrbitControls/>
          <Holo scale={1.4} />
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
        <a href="#about">
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
