import { FaNode } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import {SiAmazonaws, SiKubernetes,SiTailwindcss} from "react-icons/si";
import {
    TbBrandNextjs,
    TbBrandAnsible,
    TbBrandTerraform,
    TbBrandPython,
    TbBrandReact } from "react-icons/tb";

import {useAnimate} from "framer-motion";

// Using Clippy
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({Icon, href}) =>{
    const [scope, animate] = useAnimate()

    const getNearestSide = (e) => {
        const tile = e.target.getBoundingClientRect();
        const sides = ["left", "right", "top", "bottom"];
        const proximity = sides.map(side => ({
            proximity: Math.abs(tile[side] - (side === "left" || side === "top" ? e.clientX : e.clientY)),
            side: side
        }));

        return proximity.sort((a, b) => a.proximity - b.proximity)[0].side;
    };

    const handleMouseEnter = (e) =>{
        console.log("Mouse enter")
        const nearestSide = getNearestSide(e);
        animate(scope.current, {
            clipPath: ENTRANCE_KEYFRAMES[nearestSide]
        });
    }

    const handleMouseLeave = (e) => {
        console.log("Mouse leave")
        const nearestSide = getNearestSide(e);
        animate(scope.current, {
            clipPath: EXIT_KEYFRAMES[nearestSide]
        });
    }

    return (
        <a
            onMouseEnter={(e)=>handleMouseEnter(e)}
            onMouseLeave={(e)=>handleMouseLeave(e)}
            href={href}
            className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
        >


            <Icon className="text-xl sm:text-3xl md:text-4xl text-neutral-900"/>

            {/*overlay div*/}
            <div
                ref={scope}
                style={{clipPath:BOTTOM_RIGHT_CLIP}}
                className="absolute inset-0 grid place-content-center bg-neutral-900">
                <Icon className="text-xl sm:text-3xl md:text-4xl text-[#ebdfd5]"/>
            </div>
        </a>
    );
};

const ClipPathLinks = () => {
    return(
        <div className="border border-neutral-900 divide-y divide-neutral-900">
            <div className="grid grid-cols-3 divide-x divide-neutral-900">
                <LinkBox Icon={TbBrandReact} href="" />
                <LinkBox Icon={SiTailwindcss} href="" />
                <LinkBox Icon={TbBrandNextjs} href="" />
            </div>

            <div className="grid grid-cols-4 divide-x divide-neutral-900">
                <LinkBox Icon={TbBrandTerraform} href="" />
                <LinkBox Icon={SiAmazonaws} href="" />
                <LinkBox Icon={TbBrandAnsible} href="" />
                <LinkBox Icon={SiKubernetes} href="" />
            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-900">
                <LinkBox Icon={TbBrandPython} href="" />
                <LinkBox Icon={FaNode} href="" />
                <LinkBox Icon={BiLogoSpringBoot} href="" />
            </div>
        </div>
    )
}


const Skills = () => {
    return(
        <div className="mt-36 w-full">
            <h2 className="font-light uppercase h2 mb-20 w-full text-center">Skills</h2>
            <div className="mx-auto max-w-7xl shadow-2xl">
                <ClipPathLinks/>
            </div>
        </div>
    )
}

export default Skills;
