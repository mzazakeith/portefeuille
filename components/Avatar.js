import Image from "next/image";
import {useRouter} from "next/router";
const Avatar = () => {
  const router = useRouter();
  return (
      <div className='hidden xl:flex xl:max-w-none'>
        <Image src={`${router.basePath}/my-avatar.png`} alt='' width={737} height={678}
               className='translate-z-0 w-full h-full'/>
      </div>
  );
};

export default Avatar;
