import {motion,useScroll} from "framer-motion";
import {useRef} from "react";
import LiIcon from "../components/Lilcon";

const Details = ({type, time, place, info }) =>{
    const ref = useRef(null)
    return (
        <li ref={ref} className="mt-8 first:mt-0 w-[70%] mx-auto flex flex-col items-center justify-center">
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="uppercase text-2xl">{type}</h3>
                <div className="my-2">
                    <span className="capitalize font-light">
                        {time} | <span className="font-medium text-accent/90 ml-0.5">{place}</span>
                    </span>
                </div>
                <p className="w-full">
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
        <div className="my-32">
            <h2 className="font-light text-neutral-900 h2 uppercase mb-32 w-full text-center">Education</h2>

            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{scaleY:scrollYProgress}}
                    className="absolute h-full left-9 top-0 w-[4px] bg-neutral-900 origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        type='Bachelor Of Science In Computer Science'
                        time="2016-2020"
                        place='Asia Pacific Universty (APU)'
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                    Intelligence."
                    />

                    <Details
                        type='Bachelor Of Science In Computer Science'
                        time="2016-2020"
                        place='Asia Pacific Universty (APU)'
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                    Intelligence."
                    />
                    <Details
                        type='Bachelor Of Science In Computer Science'
                        time="2016-2020"
                        place='Asia Pacific Universty (APU)'
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                    Intelligence."
                    />
                    <Details
                        type='Bachelor Of Science In Computer Science'
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
