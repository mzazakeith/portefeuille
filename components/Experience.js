import {motion,useScroll} from "framer-motion";
import {useRef} from "react";
import LiIcon from "../components/Lilcon";

const Details = ({position, company, companyLink, time, address, work}) =>{
    const ref = useRef(null)
    return (
        <li ref={ref} className="mt-8 first:mt-0 w-[80%] lg:w-[65%] mx-auto flex flex-col items-center justify-center text-left">
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="uppercase font-medium md:text-2xl dark:text-secondary text-lg">{position} <a
                    className="uppercase font-light text-accent/90 ml-0.5"
                    href={companyLink}
                    target={"_blank"}>@ {company}</a></h3>
                <span className="capitalize font-light mt-4 dark:text-secondary/90 xs:text-sm ">
                    {time} | {address}
                </span>
                <p className="mt-2 w-full dark:text-secondary/80 text-sm md:text-lg">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )
    return (
        <div className="mt-20 xl:my-32">
            <h2 className="font-light text-neutral-900 h2 uppercase mb-16 xl:mb-32  w-full text-center dark:text-shade">Experience</h2>

            <div ref={ref} className="xl:w-[75%] lg:mx-auto relative">
                <motion.div
                    style={{scaleY:scrollYProgress}}
                    className="absolute h-full left-9 top-0 w-[4px] bg-neutral-900 dark:bg-accent origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-8 xl:ml-4">
                    <Details
                        position='Software Developer' company='Amazon'
                        companyLink=""
                        time='2020-2021'   address='Seattle, WA.'
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
                        as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />
                    <Details
                        position='Software Developer' company='Amazon'
                        companyLink=""
                        time='2020-2021'   address='Seattle, WA.'
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
                        as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />
                    <Details
                        position='Software Developer' company='Amazon'
                        companyLink=""
                        time='2020-2021'   address='Seattle, WA.'
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
                        as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />
                    <Details
                        position='Software Developer' company='Amazon'
                        companyLink=""
                        time='2020-2021'   address='Seattle, WA.'
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
                        as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />
                    <Details
                        position='Software Developer' company='Amazon'
                        companyLink=""
                        time='2020-2021'   address='Seattle, WA.'
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
                        as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />
                    <Details
                        position='Software Developer' company='Amazon'
                        companyLink=""
                        time='2020-2021'   address='Seattle, WA.'
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
                        as product recommendations and user reviews, and optimizing the app's performance and reliability."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
