import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const FeaturedItem = ({image, title, time, summary, link}) => {
  return (
      <li className="col-span-1 w-full p-4 bg-[#ebdfd5] border border-solid border-black rounded-2xl">
        <Link href={link} target="_blank"
              className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image width={300} height={500} src={image} alt={title} className="w-full h-auto"/>
        </Link>
        <Link href={link} target="_blank">
          <h2 className="capitalize text-2xl font-bold my-2">{title}</h2>
          <p className="text-sm mb-2">{summary}</p>
          <span className="text-accent font-semibold">{time}</span>
        </Link>
      </li>
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
              title="NextJS Portfolio Website"
              link="https://mzazakeith.github.io/portefeuille/"
              time="10 min"
              image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/articles/smooth%20scrolling%20in%20reactjs.png"
              summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."/>
          <FeaturedItem
              title="NextJS Portfolio Website"
              link="https://mzazakeith.github.io/portefeuille/"
              time="10 min"
              image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/articles/create%20modal%20component%20in%20react%20using%20react%20portals.png"
              summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."/>
        </ul>
      </div>
  )
};

export default More;
