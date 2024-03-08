import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {RiGithubLine} from "react-icons/ri";


const FeaturedProject = ({type,title, summary, image, link, github}) =>{
  return(
      <article className="w-full flex items-center justify-between relative rounded-3xl
      border border-solid border-black bg-[#ebdfd5] shadow-2xl p-12">
        {/*TODO: figure this shit out */}
        {/*<div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-black '/>*/}

        <Link href={link} target="_blank"
              className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <Image width={300} height={500} src={image} alt={title} className="w-full h-auto"/>
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-accent font-medium text-xl">{type}</span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
          </Link>
          <p className="my-2 font-medium text-black">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="text-[3rem] cursor-pointer"> <RiGithubLine/></Link>
            <Link href={link} target="_blank"
                  className="ml-4 rounded-sm bg-black text-[#ebdfd5] p-2 px-6 cursor-pointer">Visit Project</Link>
          </div>
        </div>

      </article>
  )

}


const Project = ({title, type, image, link, github}) => {
  return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
       border-black bg-[#ebdfd5] shadow-2xl p-6 relative">
        {/*TODO: figure this shit out */}
        {/*<div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-black '/>*/}
        <Link href={link} target="_blank"
              className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image width={300} height={500} src={image} alt={title} className="w-full h-auto"/>
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-accent font-medium text-xl">{type}</span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
          </Link>
          {/*<p className="my-2 font-medium text-black">{summary}</p>*/}
          <div className="w-full mt-2 flex items-center justify-between">
            <Link href={link} target="_blank"
                  className="text-lg rounded-sm cursor-pointer underline">Visit</Link>
            <Link href={github} target="_blank" className="text-[2rem] cursor-pointer"> <RiGithubLine/></Link>
          </div>
        </div>
      </article>
  )
}

const Projects = () => {
  return (
      <>
        <div className="w-full h-full py-32 text-center xl:text-left">
          <div className='w-full container mx-auto h-full flex flex-col items-center gap-x-6'>
            <motion.h1
                variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
                className='h1 mt-2 xl:mt-auto'> WE LEARN BY PRACTICE<span className='text-accent'>.</span>
            </motion.h1>

            <div className="grid grid-cols-12 gap-24 gap-y-28 mt-16">
              <div className="col-span-12">
                <FeaturedProject
                    title="NextJS Portfolio Website"
                    type="Featured Project"
                    link="https://mzazakeith.github.io/portefeuille/"
                    github="https://github.com/mzazakeith/portefeuille"
                    image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/projects/portfolio-cover-image.jpg"
                    summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                />
              </div>
              <div className="col-span-6">
                <Project
                    title="NextJS Portfolio Website"
                    type="Featured Project"
                    link="https://mzazakeith.github.io/portefeuille/"
                    github="https://github.com/mzazakeith/portefeuille"
                    image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/projects/portfolio-cover-image.jpg"
                    summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                />
              </div>

              <div className="col-span-6">
                <Project
                    title="NextJS Portfolio Website"
                    type="Featured Project"
                    link="https://mzazakeith.github.io/portefeuille/"
                    github="https://github.com/mzazakeith/portefeuille"
                    image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/projects/portfolio-cover-image.jpg"
                    summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                />
              </div>

              <div className="col-span-12">
                <FeaturedProject
                    title="NextJS Portfolio Website"
                    type="Featured Project"
                    link="https://mzazakeith.github.io/portefeuille/"
                    github="https://github.com/mzazakeith/portefeuille"
                    image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/projects/portfolio-cover-image.jpg"
                    summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                />
              </div>

              <div className="col-span-6">
                <Project
                    title="NextJS Portfolio Website"
                    type="Featured Project"
                    link="https://mzazakeith.github.io/portefeuille/"
                    github="https://github.com/mzazakeith/portefeuille"
                    image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/projects/portfolio-cover-image.jpg"
                    summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                />
              </div>

              <div className="col-span-6">
                <Project
                    title="NextJS Portfolio Website"
                    type="Featured Project"
                    link="https://mzazakeith.github.io/portefeuille/"
                    github="https://github.com/mzazakeith/portefeuille"
                    image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/projects/portfolio-cover-image.jpg"
                    summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                />
              </div>

              <div className="col-span-12">
                <FeaturedProject
                    title="NextJS Portfolio Website"
                    type="Featured Project"
                    link="https://mzazakeith.github.io/portefeuille/"
                    github="https://github.com/mzazakeith/portefeuille"
                    image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/projects/portfolio-cover-image.jpg"
                    summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                />
              </div>

              <div className="col-span-6">
                <Project
                    title="NextJS Portfolio Website"
                    type="Featured Project"
                    link="https://mzazakeith.github.io/portefeuille/"
                    github="https://github.com/mzazakeith/portefeuille"
                    image="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/projects/portfolio-cover-image.jpg"
                    summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                />
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
