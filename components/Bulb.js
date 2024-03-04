import Image from "next/image";
import {useRouter} from "next/router";

const Bulb = () => {
  const router = useRouter();
  const pathname = router.pathname
  return (
      <div className="absolute -bottom-12 rotate-12 animate-pulse duration-75 z-10">
        <Image
            src={`${router.basePath}/new-bulb.png`}
            width={260}
            height={200}
            alt=''
        />
      </div>
  )
};

export default Bulb;
