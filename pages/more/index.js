import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Article = ({title, date, link}) =>{
    return(
        <motion.li
            whileHover="hover"
            transition={{
                duration: 0.8,
                ease: "backInOut",
            }}
            variants={{
                hover: {
                    scale: 1.02,
                },
            }}
            className="relative w-full first:mt-0 p-4 py-2 my-4 rounded-lg flex h-[4rem] items-center justify-between border border-solid border-neutral-800
         border-r-4 border-b-4 hover:text-accent
        ">
            <Link href={link} target="_blank" className="underline">{title}</Link>
            <span className="text-accent font-semibold pl-4">{date}</span>
        </motion.li>
    )
}
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
            fill="#6589b580"
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
            fill="#6589b580"
        />
      </motion.svg>
  )
}

const FeaturedItem = ({ titleLineOne,titleLineTwo, type, summary, link, platform}) => {
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
          className="relative h-[30rem] w-[30rem] shrink-0 overflow-hidden col-span-1 p-4 bg-[#ebdfd5] border border-solid border-[#6589b580] rounded-2xl shadow-2xl">
          <div className="relative z-10 text-accent text-left">
            <span className="mb-3 block w-fit rounded-full bg-accent/30 px-3 py-2 text-sm font-light text-accent">
          {type}
        </span>
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
                  {titleLineOne}
                  <br/>
                  {titleLineTwo}
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
              titleLineOne="Africki"
              titleLineTwo="Kennels"
              link="https://mzazakeith.github.io/portefeuille/"
              type="Hobby/Business"
              platform="Instagram"
              summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive. page transitions, cool background effects, unique design and it is mobile responsive.page transitions,
                cool background effects, unique design and it is mobile responsive."/>
          <FeaturedItem
              titleLineOne="Africki"
              titleLineTwo="Kennels"
              link="https://mzazakeith.github.io/portefeuille/"
              type="Blog"
              platform="Hashnode"
              summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive.
                page transitions, cool background effects, unique design and it is mobile responsive.page transitions, cool background effects, unique design and it is mobile responsive."/>
        </ul>
          <h2 className="font-bold text-4xl text-center my-16 mt-32">Featured Articles</h2>
          <ul className="w-full">
              <Article
                  title="NextJS Portfolio Website"
                  date="March 11, 2024"
                  link="https://mzazakeith.github.io/portefeuille/"
              />

              <Article
                  title="NextJS Portfolio Website"
                  date="March 11, 2024"
                  link="https://mzazakeith.github.io/portefeuille/"
              />

              <Article
                  title="NextJS Portfolio Website"
                  date="March 11, 2024"
                  link="https://mzazakeith.github.io/portefeuille/"
              />

              <Article
                  title="NextJS Portfolio Website"
                  date="March 11, 2024"
                  link="https://mzazakeith.github.io/portefeuille/"
              />
          </ul>
      </div>
  )
};

export default More;
