import Image from "next/image";
import {useRouter} from "next/router";

const BottomRightImg = () => {
    const router = useRouter();

    return (
        <div className='absolute right-0 bottom-0 z-10 xl:w-[150px] rotate-25 opacity-80'>
            <Image src={`${router.basePath}/code-icon.png`} width={300} height={300} alt=''/>
        </div>
    );
};

export default BottomRightImg;
