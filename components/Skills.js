import { FaJava, FaNode } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

import {
    SiAmazonaws,
    SiAnsible,
    SiKubernetes,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiTerraform,

} from "react-icons/si";


const LinkBox = ({Icon, href}) =>{
    return (
        <a href={href}>
            <Icon/>
        </a>
    );
};

const ClipPathLinks = () => {
    return(
        <div className="border border-neutral-900 divide-y divide-neutral-900">
            <div className="grid grid-cols-2 divide-x divide-neutral-900">

            </div>

            <div className="grid grid-cols-4 divide-x divide-neutral-900">

            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-900">

            </div>
        </div>
    )
}


const Skills = () => {
    return(
        <div className="px-4 py-12">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Skills</h2>
            <div className="mx-auto max-w-7xl">
                <ClipPathLinks/>
            </div>
        </div>
    )
}

export default Skills;
