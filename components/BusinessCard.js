import Image from "next/image";
import {useRouter} from "next/router";


const BusinessCard = () => {
    const router = useRouter();
    return(
        <div
            className="relative min-h-[200px] max-w-[400px] w-full rounded-lg shadow-2xl bg-[#BEB5AF] m-[2rem] overflow-hidden">
            <div className="flex flex-col justify-center m-4 mb-0">
                <div className="flex flex-row items-start justify-between">
                    <h1 className="text-2xl">Keith Mzaza</h1>
                    <div className="bg-[#BEB5AF] rounded-md z-10
                border border-solid flex flex-col justify-center items-center border-[#A69F99]/50">
                        <Image src={`${router.basePath}/my-avatar.png`} alt='' width={50} height={50}
                        />
                    </div>
                </div>
                <div className="flex flex-row items-start">
                    <p className="text-accent">Fullstack Developer & DevOps Engineer</p>
                </div>
            </div>

            <div className="flex flex-col pb-5 pt-2 gap-1">
                <div className="grid grid-cols-2 mr-8">
                    <span className="text-black font-bold col-span-1 text-left ml-4">email</span>
                    <span className="font-light z-10 col-span-1 text-left">mzazakeith@gmail.com</span>
                </div>
                <div className="grid grid-cols-2 mr-8">
                    <span className="text-black font-bold col-span-1 text-left ml-4">linkedIn</span>
                    <span className="font-light z-10 col-span-1 text-left">k-mzaza</span>
                </div>
                <div className="grid grid-cols-2 mr-8">
                    <span className="text-black font-bold col-span-1 text-left ml-4">github</span>
                    <span className="font-light z-10 col-span-1 text-left">mzazakeith</span>
                </div>

                <div className="grid grid-cols-2 mr-8">
                    <span className="text-black font-bold col-span-1 text-left ml-4">hashnode</span>
                    <span className="font-light z-10 col-span-1 text-left">mzaza.hashnode.dev</span>
                </div>
            </div>

            <div className="absolute right-0 bottom-0 z-0">
                <div className="w-[260px] h-[260px] bg-[#A69F99]/50 rounded-full"></div>
            </div>
        </div>
    );
};

export default BusinessCard;
