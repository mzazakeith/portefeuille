import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {RiGithubLine} from "react-icons/ri";
import ProjectsBtn from "../../components/ProjectsBtn";

const FramerImage = motion(Image)

const FeaturedProject = ({type,title, summary, image, link, github}) =>{
  return(
      <motion.article
          initial={{y:50}}
          whileInView={{y:0}}
          transition={{duration:0.5, type:"spring"}}
          className="w-full flex items-center justify-between relative rounded-3xl
      border border-solid border-neutral-900 bg-primary shadow-2xl p-12 border-r-8 border-b-8">
        <Link href={link} target="_blank"
              className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
              whileHover={{scale:1.05}}
              transition={{duration:0.2}}
              width={300}
              height={500}
              src={image}
              alt={title}
              className="w-full h-auto"/>
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-accent font-light uppercase text-xl">{type}</span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-medium uppercase">{title}</h2>
          </Link>
          <p className="my-2 text-neutral-900">{summary}</p>
          <div className="flex flex-row gap-2">
            <span className="flex flex-col justify-center text-sm mb-2 uppercase">
              Main Tech :
            </span>
            <span className="mb-3 mt-1 block w-fit rounded-full bg-accent/20 px-3 py-2 text-sm font-light text-accent">
              React
            </span>
            <span className="mb-3 mt-1 block w-fit rounded-full bg-accent/20 px-3 py-2 text-sm font-light text-accent">
              ThreeJS
            </span>
            <span className="mb-3 mt-1 block w-fit rounded-full bg-accent/20 px-3 py-2 text-sm font-light text-accent">
              NodeJs
            </span>
          </div>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="text-[3rem] cursor-pointer"> <RiGithubLine/></Link>
            <Link href={link} target="_blank"
                  className="ml-4 rounded-md bg-neutral-900 uppercase text-primary border border-solid
                  p-2 px-6 cursor-pointer hover:bg-primary hover:border-neutral-900 hover:text-neutral-900">Visit
              Project</Link>
          </div>
        </div>

      </motion.article>
  )

}


const Project = ({title, type, image, link, github}) => {
  return (
      <motion.article
          initial={{y: 50}}
          whileInView={{y: 0}}
          transition={{duration: 0.5, type: "spring"}}
          className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
       border-neutral-900 bg-primary shadow-2xl p-6 relative border-r-8 border-b-8">

        <Link href={link} target="_blank"
              className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
              whileHover={{scale:1.05}}
              transition={{duration:0.2}}
              width={300} height={500} src={image} alt={title} className="w-full h-auto"/>
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-accent font-light uppercase text-xl">{type}</span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-3xl font-medium uppercase">{title}</h2>
          </Link>
          <div className="flex flex-row gap-2">
            <span className="flex flex-col justify-center text-sm mb-2 uppercase">
              Main Tech :
            </span>
            <span className="mb-3 mt-1 block w-fit rounded-full bg-accent/20 px-3 py-2 text-sm font-light text-accent">
              React
            </span>
            <span className="mb-3 mt-1 block w-fit rounded-full bg-accent/20 px-3 py-2 text-sm font-light text-accent">
              ThreeJS
            </span>
            <span className="mb-3 mt-1 block w-fit rounded-full bg-accent/20 px-3 py-2 text-sm font-light text-accent">
              NodeJs
            </span>
          </div>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link href={link} target="_blank"
                  className="text-lg cursor-pointer underline uppercase hover:text-accent/90">Visit</Link>
            <Link href={github} target="_blank" className="text-[2rem] cursor-pointer"> <RiGithubLine/></Link>
          </div>
        </div>
      </motion.article>
  )
}

const Projects = () => {
  return (
      <>
        <div className="w-full h-full py-32 text-center xl:text-left">
          <div className='w-full container mx-auto h-full flex flex-col items-center gap-x-6'>
            <motion.h1
                variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
                className='h1 mt-2 font-light xl:mt-auto uppercase'> WE LEARN BY PRACTICE<span className='text-accent'>.</span>
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
                <ProjectsBtn/>
              </div>
            </div>
          </div>

        </div>
      </>
  );
};

export default Projects;
