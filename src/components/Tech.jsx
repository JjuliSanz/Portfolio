import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center gap-10 relative">
        {technologies.map((technology) => (
          <div
            className="w-24 h-2w-24 skillContainer p-1 flex justify-center items-center"
            key={technology.name}
          >
            <div className="rounded-[20%] skillImageContainer h-[100%] p-2 flex justify-center items-center relative">
              <img
                src={technology.icon}
                className="object-cover object-center"
              />
            </div>          
          </div>
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(Tech, "");
