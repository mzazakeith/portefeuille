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
        <a
            href={href}
            className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36">
            <Icon className="text-xl sm:text-3xl md:text-4xl"/>
        </a>
    );
};

const ClipPathLinks = () => {
    return(
        <div className="border border-neutral-900 divide-y divide-neutral-900">
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
                <LinkBox Icon={SiReact} href="" />
                <LinkBox Icon={SiNextdotjs} href="" />
            </div>

            <div className="grid grid-cols-4 divide-x divide-neutral-900">
                <LinkBox Icon={SiAmazonaws} href="" />
                <LinkBox Icon={SiTerraform} href="" />
                <LinkBox Icon={SiAnsible} href="" />
                <LinkBox Icon={SiKubernetes} href="" />
            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-900">
                <LinkBox Icon={FaNode} href="" />
                <LinkBox Icon={SiPython} href="" />
                <LinkBox Icon={BiLogoSpringBoot} href="" />
            </div>
        </div>
    )
}


const Skills = () => {
    return(
        <div className="px-4 py-12 w-full">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Skills</h2>
            <div className="mx-auto max-w-7xl">
                <ClipPathLinks/>
            </div>
        </div>
    )
}

export default Skills;
