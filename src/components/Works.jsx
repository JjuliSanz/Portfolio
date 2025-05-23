import { Tilt } from "react-tilt";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import github from "../assets/github.png";
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
  web_url,
  figma_url,
  backend_url,
}) => {
  const [openPreview, setOpenPreview] = useState(false);
  const [fullDesc, setFullDesc] = useState(false);

  const handleOpenPreview = () => {
    setOpenPreview(true);
  };
  const handleOpenGitHub = (e) => {
    e.stopPropagation();
    window.open(source_code_link, "_blank");
  };
  const handleOpenDesc = () => {
    setFullDesc(!fullDesc);
  };
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 bg-projects-pattern bg-cover bg-no-repeat bg-center rounded-2xl sm:w-[360px] w-full"
    >
      {/* Image */}
      <div
        className="w-full h-[230px] cursor-pointer"
        onClick={handleOpenPreview}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top rounded-2xl"
        />
      </div>
      {/* Card */}
      <div className="mt-5">
        <div className="flex justify-between">
          {/* Title */}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {/* Github icon */}
          <div className="flex justify-end m-3 card-img_hover ">
            <div
              onClick={(e) => handleOpenGitHub(e)}
              className="bg-gradient-to-r from-[#803788] to-[#09001c] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                loading="lazy"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Description */}
        <p className="mt-2 text-secondary text-[14px]">
          {!fullDesc ? (
            <>
              {`${description.substring(0, 195)}`}
              <span
                className="text-[14px] font-semibold tracking-wider"
                onClick={handleOpenDesc}
              >
                ...
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill inline cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </>
          ) : (
            <>
              {description}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-up-fill inline cursor-pointer"
                viewBox="0 0 16 16"
                onClick={handleOpenDesc}
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            </>
          )}
        </p>
      </div>
      {/* Work tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      {/* Live Demo */}
      <div className="mt-5 mr-1">
        {" "}
        Live Demo:
        <a
          href={web_url}
          target="_blank"
          className="mt-2 ml-2 text-secondary text-[14px]"
        >
          {web_url}
        </a>
        {figma_url && (
          <div className="w-full">
            Figma Url:
            <a
              href={figma_url}
              target="_blank"
              className="mt-2 ml-2 text-secondary text-[14px] line-clamp-1"
            >
              {figma_url}
            </a>
          </div>
        )}
        {backend_url && (
          <div>
            Backend Url:
            <a
              href={backend_url}
              target="_blank"
              className="mt-2 ml-2 text-secondary text-[14px]"
            >
              {backend_url}
            </a>
          </div>
        )}
      </div>
      {/* Preview */}
      <AnimatePresence>
        {openPreview && (
          <Preview
            image={image}
            name={name}
            onClose={() => setOpenPreview(false)}
          />
        )}
      </AnimatePresence>
    </Tilt>
  );
};

// Image Preview Pop Up

const modal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const Preview = ({ image, name, onClose }) => {
  return createPortal(
    <motion.div
      className="fixed inset-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-70 overflow-auto p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClose}
    >
      {/* Modal */}
      <motion.div
        className="w-full h-full relative"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"       
      >
        <button
          type="button"
          className="absolute right-2 text-gray-400 hover:text-gray-500"
          onClick={onClose}
        >
          <XMarkIcon className="h-10 w-10" aria-hidden="true" />
        </button>

        <img
          src={image}
          alt={name}
          loading="lazy"
          className="object-scale-down object-start rounded-3xl w-full h-full"
        />
      </motion.div>
    </motion.div>,
    document.body // <-- Esto es lo clave: renderizar directamente en <body>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ">
          Projects
        </h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.slice(0, 10).map((project, index) => (
          <ProjectCard key={project.name} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
