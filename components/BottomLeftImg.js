import Image from "next/image";
import {useRouter} from "next/router";

import {motion} from 'framer-motion';
import {fadeIn} from "../variants";


const BottomLeftImg = () => {
    const router = useRouter();
    const pathname = router.pathname
  return (
      <motion.div
          variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'
          className={`absolute hidden ${pathname === "/" && 'xl:block'} left-1 bottom-0 z-10 
          xl:w-[150px]`}>
        <Image className="-rotate-25 animate-pulse" src={`${router.basePath}/terminal-icon.png`} width={120} height={120} alt=''/>
      </motion.div>
  );
};

export default BottomLeftImg;
