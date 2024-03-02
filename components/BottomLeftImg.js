import Image from "next/image";
import {useRouter} from "next/router";

const BottomLeftImg = () => {
    const router = useRouter();
    const pathname = router.pathname
  return (
      <div className={`absolute hidden ${pathname === "/" && 'xl:block'} left-1 bottom-0 z-10 xl:w-[150px] -rotate-25 animate-pulse`}>
        <Image src={`${router.basePath}/terminal-icon.png`} width={120} height={120} alt=''/>
      </div>
  );
};

export default BottomLeftImg;
