// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import Avatar from "../../components/Avatar";

import {motion, useAnimation, useInView, useMotionValue, useSpring} from 'framer-motion'
import {fadeIn} from "../../variants";
import {useEffect, useRef} from "react";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import Link from "next/link";
import {RiLinkedinFill} from "react-icons/ri";
import Skills from "../../components/Skills";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="adobexd" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const AnimatedNumbers = ({value}) =>{
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration:4500})
  const isInView = useInView(ref)
  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest)=>{
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value]);

  return <span ref={ref}></span>
}

const About = () => {
  return (
      <div className="h-full pt-16 pb-32 text-center xl:text-left">
        <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden bottom-0 mr-1 fixed xl:flex -left-[190px]">
          <Avatar/>
        </motion.div>
        <div className='container mx-auto h-full flex flex-col items-center gap-x-6'>
          <motion.h1
              variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
              className='h1 mt-2 xl:mt-auto uppercase font-light text-neutral-900'> Learn <span
              className='text-accent'>.</span> Create <span
              className='text-accent'>.</span> Innovate
          </motion.h1>
          <div className="grid w-full gap-16 md:grid-cols-8 md:gap-16">
            <div className='md:col-span-4 flex flex-col items-start justify-start'>
              <h2 className='text-xl uppercase font-light text-neutral-900 underline mt-8 mb-9'>PERSONAL SUMMARY</h2>
              <p>Hi, I am Lorem. Amet ipsum mauris vitae purus faucibus ornare. Nullam vel risus egestas, fringilla vel,
                aliquet magna. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus
                auctor fringilla. Phasellus eu ex justo. Maecenas sem magna, tincidunt quis, venenatis eget, pulvinar
                vel, mauris. Morbi leo risus, porta ac, consectetur ac, vestibulum at, eros. </p>
              <br/>
              <p>I believe that lorem ipsum. Maecenas sem magna, tincidunt quis, venenatis eget, pulvinar vel, mauris.
                Morbi leo risus, porta ac, consectetur ac, vestibulum at, eros. Donec ullamcorper nulla non metus auctor
                fringilla.</p>
              <br/>
              <p>I look forward to the opportunity to lorem ipsum. Nullam vel risus egestas, fringilla vel, aliquet
                magna.</p>
            </div>

            <div className='md:col-span-4 flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start justify-center mb-4 md:mb-0'>
                <span className='text-accent font-light inline-block text-7xl'>
                  <AnimatedNumbers value={100}/> +
                </span>
                <h2 className='text-lg font-light uppercase text-neutral-900'>Satisfied Clients</h2>
              </div>

              <div className='flex flex-col items-start justify-center mb-4 ml-4 md:mb-0'>
                <span className='text-accent font-light inline-block text-7xl'>
                  <AnimatedNumbers value={50}/> +
                </span>
                <h2 className='text-lg font-light uppercase text-neutral-900'>Satisfied Clients</h2>
              </div>

              <div className='flex flex-col items-start justify-center mb-4 ml-4 md:mb-0'>
                <span className='text-accent font-light inline-block text-7xl'>
                  <AnimatedNumbers value={5}/> +
                </span>
                <h2 className='text-lg font-light uppercase text-neutral-900'>Satisfied Clients</h2>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center w-full'>
            <div className="text-accent inline-block animate-bounce hover:animate-none">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
              </svg>
            </div>
          </div>

          <Skills/>

          <motion.div
              initial={{y: 50}}
              whileInView={{y: 0}}
              transition={{duration: 0.5, type: "spring"}}
              className="flex self-center items-center mt-16"
          >
            <Link
                className="flex items-center hover:bg-accent p-2.5 px-6 hover:text-[#ebdfd5] rounded-sm
                        bg-[#ebdfd5] text-accent border border-solid hover:border-transparent
                        border-accent
                        "
                href="https://www.linkedin.com/in/k-mzaza/details/certifications/" target="_blank">View
              More <RiLinkedinFill className="text-black w-6 ml-1"/>
            </Link>
          </motion.div>

          <div className='flex flex-row justify-center items-center w-full mt-10'>
            <div className="text-accent inline-block animate-bounce hover:animate-none">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
              </svg>
            </div>
          </div>

          <Experience/>

          <div className='flex flex-row justify-center items-center w-full mt-8'>
            <div className="text-accent inline-block animate-bounce hover:animate-none">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
              </svg>
            </div>
          </div>

          <Education/>


          <motion.div
              initial={{y: 50}}
              whileInView={{y: 0}}
              transition={{duration: 0.5, type: "spring"}}
              className="flex self-center items-center"
          >
            <Link
                className="flex items-center hover:bg-accent p-2.5 px-6 hover:text-[#ebdfd5] rounded-sm
                        bg-[#ebdfd5] text-accent border border-solid hover:border-transparent
                        border-accent
                        "
                href="https://www.linkedin.com/in/k-mzaza/details/certifications/" target="_blank">View
              Certifications <RiLinkedinFill className="text-black w-6 ml-1"/>
            </Link>
          </motion.div>

        </div>
      </div>
  )
};

export default About;
