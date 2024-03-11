import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";


const Background = ( ) => {
  return (
      <motion.svg
          width="30rem"
          height="30rem"
          viewBox="0 0 320 384"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-0"
          variants={{
            hover: {
              scale: 1.5,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
      >
        <motion.circle
            variants={{
              hover: {
                scaleY: 0.5,
                y: -25,
              },
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              delay: 0.2,
            }}
            cx="160.5"
            cy="114.5"
            r="101.5"
            fill="#262626"
        />
        <motion.ellipse
            variants={{
              hover: {
                scaleY: 2.25,
                y: -25,
              },
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              delay: 0.2,
            }}
            cx="160.5"
            cy="265.5"
            rx="101.5"
            ry="43.5"
            fill="#262626"
        />
      </motion.svg>
  )
}

const FeaturedItem = ({image, title, time, summary, link, platform}) => {
  return (
      <motion.li
          whileHover="hover"
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          variants={{
            hover: {
              scale: 1.05,
            },
          }}
          className="relative h-[30rem] w-[30rem] shrink-0 overflow-hidden col-span-1 p-4 bg-[#ebdfd5] border border-solid border-black rounded-2xl">
        <div className="relative z-10 text-accent text-left">
          <motion.span
              initial={{scale: 0.85}}
              variants={{
                hover: {
                  scale: 1,
                },
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]">
            $299/
            <br/>
            Month
          </motion.span>
          <p className="text-sm mb-2">{summary}</p>
        </div>
        <button
            className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-accent bg-accent py-2
             text-center font-mono font-black uppercase text-neutral-800 backdrop-blur
              transition-colors hover:bg-white/30 hover:text-neutral-800">
          View {platform}
        </button>
        <Background/>
      </motion.li>
  )
}

// <Link href={link} target="_blank"
//       className="w-full cursor-pointer overflow-hidden rounded-lg"
// >
//   <Image width={300} height={500} src={image} alt={title} className="w-full h-auto"/>
// </Link>
// <Link href={link} target="_blank">
//   <h2 className="capitalize text-2xl font-bold my-2">{title}</h2>
//
//   <span className="text-accent font-semibold">{time}</span>
// </Link>

const More = () => {
  return (
      <div className="h-full w-full flex flex-col items-center
      justify-center overflow-hidden pt-16 pb-32 text-center container mx-auto">
        <motion.h1
            variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
            className='h1 mt-2 xl:mt-auto'>
          Passion led us here
        </motion.h1>

        <ul className="grid grid-cols-2 gap-16">
          <FeaturedItem
              title="NextJS Portfolio Website"
              link="https://mzazakeith.github.io/portefeuille/"
              time="10 min"
              platform="Instagram"
              image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/articles/smooth%20scrolling%20in%20reactjs.png"
              summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."/>
          <FeaturedItem
              title="NextJS Portfolio Website"
              link="https://mzazakeith.github.io/portefeuille/"
              time="10 min"
              platform="Hashnode"
              image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/articles/create%20modal%20component%20in%20react%20using%20react%20portals.png"
              summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."/>
        </ul>
      </div>
  )
};

export default More;
