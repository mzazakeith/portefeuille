import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import Bulb from "../../components/Bulb";

const Projects = () => {
  return (
      <>
        <div className="h-full py-32 text-center xl:text-left">
          <div className='container mx-auto h-full flex flex-col items-center gap-x-6'>
            <motion.h1
                variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
                className='h1 mt-2 xl:mt-auto'> WE LEARN BY PRACTICE<span className='text-accent'>.</span>
            </motion.h1>

            <div className="grid grid-cols-12 gap-24">
              <div className="col-span-12">
                Featured Project
              </div>
              <div className="col-span-6">
                Project - 1
              </div>
              <div className="col-span-6">
                Project - 2
              </div>
              <div className="col-span-12">
                Featured Project -2
              </div>
              <div className="col-span-6">
                Project - 3
              </div>
              <div className="col-span-6">
                Project - 4
              </div>
              <div className="col-span-12">
                Featured Project - 3
              </div>
              <div className="col-span-6">
                Project - 5
              </div>
              <div className="col-span-6">
                View More Button
              </div>
            </div>
          </div>

        </div>
      </>
  );
};

export default Projects;
