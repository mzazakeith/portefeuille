import Image from "next/image";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const BottomRightImg = () => {
    const router = useRouter();
    const pathname = router.pathname
    return (
        <motion.div
            variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'
            className={`absolute hidden ${pathname === "/" && 'xl:block'} right-0 bottom-0 z-10 xl:w-[150px] 
            rotate-25 opacity-80`}>
            <Image src={`${router.basePath}/code-icon.png`} width={300} height={300} alt=''/>
        </motion.div>
    );
};

export default BottomRightImg;
