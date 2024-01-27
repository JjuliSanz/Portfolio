import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      {" "}
      {/* Apply Tilt effect */}
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Add fade-in animation
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }} // Tilt options
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />{" "}
          {/* Service icon */}
          <h3 className="text-white text-[20px] font-bold text-center">
            {title} {/* Service title */}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {" "}
        {/* Add text animation */}
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)} // Add fade-in animation
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a Full Stack Web Developer with a primary focus on front-end
        development, I bring nearly two years of dedicated practice and
        continuous learning to the realm of web development. My journey has been
        shaped by a combination of structured courses, hands-on projects, and
        the creation of both cloned and original web applications. Throughout my
        learning path, I have honed my skills in crafting engaging and
        responsive user interfaces. My proficiency extends to leveraging modern
        front-end technologies, including HTML, CSS, and JavaScript frameworks.
        I have a keen eye for design principles, ensuring seamless user
        experiences across various devices.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> // Render ServiceCard component
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
