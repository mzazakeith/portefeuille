import Image from "next/image";
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import {motion} from "framer-motion";

const BusinessCard = () => {
    const divRef = useRef(null);
    const router = useRouter();
    const [rotateY, setRotateY] = useState(0);
    const [rotateX, setRotateX] = useState(0);

    const handleMouseMove = (e) => {
        if(!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect()

        const width = rect.width;
        const height = rect.height;

        const ROTATION_RANGE_DEGREES = 35;
        const HALF_ROTATION_RANGE = ROTATION_RANGE_DEGREES / 2;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE_DEGREES;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE_DEGREES;

        const rX = mouseX / width - HALF_ROTATION_RANGE;
        const rY = (mouseY / height - HALF_ROTATION_RANGE) * -1;

        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return(
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transition: "linear 0.8s",
                rotateY: rotateY,
                rotateX: rotateX
            }}
            className="relative min-h-[200px] max-w-[400px] w-full rounded-lg shadow-2xl bg-[#BEB5AF] m-8 mt-16 overflow-hidden">
            <div className="flex flex-col justify-center m-4 mb-0">
                <div className="flex flex-row items-start justify-between z-10">
                    <h1 className="text-3xl mt-2 font-semibold">Keith Mzaza</h1>
                    <div className="bg-[#BEB5AF] rounded-md
                border border-solid flex flex-col justify-center items-center min-h-[55px] min-w-[55px] border-[#A69F99]/50">
                        <Image className="mb-1" src={`${router.basePath}/my-avatar.png`} alt='' width={45} height={45}
                        />
                    </div>
                </div>
                <div className="flex flex-row items-start">
                    <p className="text-accent z-10 text-sm">Fullstack Developer & DevOps Engineer</p>
                </div>
            </div>

            <div className="flex flex-col pb-5 pt-2 gap-1">
                <div className="grid grid-cols-2 mr-8">
                    <span className="text-black font-bold col-span-1 text-left ml-4">email</span>
                    <span className="font-light z-10 col-span-1 text-left underline hover:text-accent/90">mzazakeith@gmail.com</span>
                </div>
                <div className="grid grid-cols-2 mr-8">
                    <span className="text-black font-bold col-span-1 text-left ml-4">linkedIn</span>
                    <span className="font-light z-10 col-span-1 text-left underline hover:text-accent/90">k-mzaza</span>
                </div>
                <div className="grid grid-cols-2 mr-8">
                    <span className="text-black font-bold col-span-1 text-left ml-4">github</span>
                    <span className="font-light z-10 col-span-1 text-left underline hover:text-accent/90">mzazakeith</span>
                </div>

                <div className="grid grid-cols-2 mr-8">
                    <span className="text-black font-bold col-span-1 text-left ml-4">hashnode</span>
                    <span className="font-light z-10 col-span-1 text-left underline hover:text-accent/90">mzaza.hashnode.dev</span>
                </div>
            </div>

            <div className="absolute right-0 bottom-0 z-0">
                <div className="w-[260px] h-[260px] bg-[#A69F99]/50 rounded-full"></div>
            </div>
        </motion.div>
    );
};

export default BusinessCard;
