import ParticlesContainer from "../components/ParticlesContainer";
import {RiDownloadLine} from "react-icons/ri";

import Avatar from "../components/Avatar";

import {motion} from 'framer-motion';

import {fadeIn} from "../variants";
import Link from "next/link";

const Home = () => {
  return (
      <div className='h-full overflow-hidden'>

        <div className='w-full h-full'>
          <div className='mt-[15%] md:mt-2 lg:mt-5 xl:mt-0 flex flex-col justify-center text-center xl:pt-[18%] xl:text-left h-full container mx-auto'>

            <motion.h1
                variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
                className='h1 text-neutral-900 dark:text-shade font-light'>Seamless Experiences <br/> from{' '}
                <span className='text-accent'>Code to Cloud<span className="text-neutral-900">.</span></span>
            </motion.h1>


              <motion.p
                variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'
                className='text-neutral-900 dark:text-secondary max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-8'>
                  {`Hey, welcome to my portfolio! I'm Keith Mzaza, a Full-Stack Developer and DevOps Engineer based in Nairobi, Kenya. Here, you can explore my latest projects, articles, and more.`}
              </motion.p>
              <motion.div
                  variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'
                  className="flex self-center xl:self-start items-center"
              >
                  <Link
                      className="flex items-center hover:bg-accent p-2.5 px-6 hover:text-primary rounded-sm
                      bg-primary text-accent border border-solid hover:border-transparent
                      border-accent uppercase dark:bg-dark
                      "
                      href="/resume.pdf" // Update this path to the actual location of your resume
                      target="_blank"
                      download="Mzaza Keith Resume.pdf" >Resume<RiDownloadLine className="w-6 ml-1"/></Link>
                  <Link className="z-40 ml-4 capitalize underline hover:text-accent cursor-pointer p-1.5 px-6 dark:text-secondary" href="mailto:mzazakeith@gmail.com" >Contact Me</Link>
              </motion.div>

          </div>
        </div>

        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
            <div className='bg-none w-full h-full absolute
            mix-blend-color-dodge translate-z-0'>
            </div>

            <ParticlesContainer/>

            <motion.div
                variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden'
                transition={{duration:1, ease:'easeIn'}}
                className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
                <Avatar/>
            </motion.div>
        </div>

      </div>
  );
};

export default Home;
