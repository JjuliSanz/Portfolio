import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";


import { styles } from "../styles";
import { github, web } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_url
}) => {
  const [openPreview, setOpenPreview] = useState(false);

  const handleOpenPreview = () => {
    setOpenPreview(true);
    console.log(image);
  };
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] cursor-pointer" onClick={handleOpenPreview}>
          {/* Image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl "
            
          />

          {/* Github icon */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          {/* Url icon */}
          <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
            <div onClick={() => window.open(web_url, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={web} alt="weburl" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Work Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Preview */}
        {openPreview && (
          <Preview
            image={image}
            name={name}
            onClose={() => setOpenPreview(false)}
          />
        )}
      </Tilt>
    </motion.div>
  );
};

// Image Preview Pop Up
const Preview = ({ image, name, onClose }) => {
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog 
        as="div"
        className="fixed inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative shadow-xl">
              {/* Close button */}
              <button
                type="button"
                className="absolute right-2 text-gray-400 hover:text-gray-500"
                onClick={() => onClose()}
              >
                {/* <span className="sr-only">Close</span> */}
                <XMarkIcon className="h-10 w-10" aria-hidden="true" />
              </button>

              {/* Image */}
              <div className="bg-tertiary p-5 rounded-3xl sm:w-[1300px] w-full">
                <img
                  // src='/src/assets/angularPortfolioImg.png'
                  src={image}
                  alt={name}
                  className="object-cover object-center rounded-3xl"
                />             
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
