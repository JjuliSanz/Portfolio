import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import github from "../assets/github.png"
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
    console.log(image);
  };
  const handleOpenURL = (url) => {
    web_url.forEach((url) => window.open(url, "_blank"));
  };
  const handleOpenGitHub = (e) => {
    e.stopPropagation();
    window.open(source_code_link, "_blank");
  };
  const handleOpenDesc = () => {
    setFullDesc(!fullDesc);
  };
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    //   <Tilt
    //     options={{
    //       max: 45,
    //       scale: 1,
    //       speed: 450,
    //     }}
    //     className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    //   >
    //     <div
    //       className="relative w-full h-[230px] cursor-pointer"
    //       onClick={handleOpenPreview}
    //     >
    //       {/* Image */}
    //       <img
    //         src={image}
    //         alt={name}
    //         className="w-full h-full object-cover object-top rounded-2xl "
    //       />

    //       {/* Url icon */}
    //       {/* {web_url.map((url, index) => (
    //         <div
    //           key={index}
    //           className="absolute inset-0 flex justify-start m-3 card-img_hover inline-block"
    //         >
    //           <div
    //             onClick={() => handleOpenURL(url)}
    //             className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline-block"
    //           >
    //             <img
    //               src={url}
    //               alt="weburl"
    //               className="w-1/2 h-1/2 object-contain"
    //             />
    //           </div>
    //         </div>
    //       ))} */}
    //     </div>

    //     <div className="mt-5">
    //       <div className="flex justify-between">
    //         {/* Title */}
    //         <h3 className="text-white font-bold text-[24px]">{name}</h3>
    //         {/* Github icon */}
    //         <div className="flex justify-end m-3 card-img_hover ">
    //           <div
    //             onClick={(e) => handleOpenGitHub(e)}
    //             className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
    //           >
    //             <img
    //               src={github}
    //               alt="github"
    //               className="w-1/2 h-1/2 object-contain"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       {/* Description */}
    //       <p className="mt-2 text-secondary text-[14px]">{description}</p>
    //     </div>

    //     {/* Work Tags */}
    //     <div className="mt-4 flex flex-wrap gap-2">
    //       {tags.map((tag) => (
    //         <p key={tag.name} className={`text-[14px] ${tag.color}`}>
    //           #{tag.name}
    //         </p>
    //       ))}
    //     </div>

    //     {/* Live Demo */}
    //     <div className="mt-5 mr-1">
    //       {" "}
    //       Live Demo:
    //       <a
    //         href={web_url}
    //         target="_blank"
    //         className="mt-2 ml-2 text-secondary text-[14px]"
    //       >
    //         {web_url}
    //       </a>
    //       {backend_url && (
    //         <div>
    //           Backend Url:
    //           <a
    //             href=""
    //             target="_blank"
    //             className="mt-2 ml-2 text-secondary text-[14px]"
    //           >
    //             {backend_url}
    //           </a>
    //         </div>
    //       )}
    //     </div>

    //     {/* Preview */}
    //     {openPreview && (
    //       <Preview
    //         image={image}
    //         name={name}
    //         onClose={() => setOpenPreview(false)}
    //       />
    //     )}
    //   </Tilt>
    // </motion.div>
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
        className="relative w-full h-[230px] cursor-pointer"
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
          <div>
            Figma Url:
            <a
              href={figma_url}
              target="_blank"
              className="mt-2 ml-2 text-secondary text-[14px]"
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
      {openPreview && (
        <Preview
          image={image}
          name={name}
          onClose={() => setOpenPreview(false)}
        />
      )}
    </Tilt>
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
                  src={image}
                  alt={name}
                  loading="lazy"
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
      <div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
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
