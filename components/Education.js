import {motion,useScroll} from "framer-motion";
import {useRef} from "react";
import LiIcon from "../components/Lilcon";

const Details = ({type, time, place, info }) =>{
    const ref = useRef(null)
    return (
        <li ref={ref} className="mt-8 first:mt-0 w-[80%] lg:w-[65%] mx-auto flex flex-col items-center justify-center text-left">
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="uppercase font-medium md:text-2xl dark:text-secondary text-lg">{type}</h3>
                <div className="my-2">
                    <span className="capitalize font-light text-md md:text-2xl">
                        <span className="dark:text-secondary/90">{time} | </span><span className="font-medium text-accent/90 ml-0.5 uppercase"> {place}</span>
                    </span>
                </div>
                <p className="w-full dark:text-secondary/80 text-sm md:text-lg">
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )
    return (
        <div className="mt-20 xl:my-32">
            <h2 className="font-light text-neutral-900 h2 uppercase mb-16 xl:mb-32  w-full text-center dark:text-shade">Education</h2>

            <div ref={ref} className="xl:w-[75%] lg:mx-auto relative">
                <motion.div
                    style={{scaleY:scrollYProgress}}
                    className="absolute h-full left-9 top-0 w-[4px] bg-neutral-900 origin-top dark:bg-accent"/>
                <ul className="w-full flex flex-col items-start justify-between ml-8 xl:ml-4">
                    <Details
                        type='BSc. In Computer Science'
                        time="2016-2020"
                        place='Asia Pacific Universty (APU)'
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                    Intelligence."
                    />

                    <Details
                        type='BSc. In Computer Science'
                        time="2016-2020"
                        place='Asia Pacific Universty (APU)'
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                    Intelligence."
                    />
                    <Details
                        type='BSc. In Computer Science'
                        time="2016-2020"
                        place='Asia Pacific Universty (APU)'
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                    Intelligence."
                    />
                    <Details
                        type='BSc. In Computer Science'
                        time="2016-2020"
                        place='Asia Pacific Universty (APU)'
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                    Intelligence."
                    />

                </ul>
            </div>
        </div>
    );
};

export default Education;
