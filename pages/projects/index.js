import {fadeIn} from "../../variants";
import {motion} from "framer-motion";

const Projects = () => {
  return (
      <>
        <div className="h-full py-32 text-center xl:text-left">
          <div className='container mx-auto h-full flex flex-col items-center gap-x-6'>
            <motion.h1
                variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
                className='h1 mt-2 xl:mt-auto'> WE LEARN BY PRACTICE<span className='text-accent'>.</span>
            </motion.h1>
          </div>
        </div>
      </>
  );
};

export default Projects;
