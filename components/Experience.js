import {motion,useScroll} from "framer-motion";
import {useRef} from "react";
import LiIcon from "../components/Lilcon";

const Details = ({position, company, companyLink, time, address, work}) =>{
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center">
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl">{position} <a
                    className="capitalize text-accent"
                    href={companyLink}
                    target={"_blank"}>@{company}</a></h3>
                <span className="capitalize font-medium">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">
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
        <div className="my-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>

            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{scaleY:scrollYProgress}}
                    className="absolute h-full left-9 top-0 w-[4px] bg-black origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
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
