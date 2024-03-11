import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {RiGithubFill} from "react-icons/ri";

const ProjectsBtn = () => {
  const router = useRouter();
  return (
      <div className="w-full h-full flex justify-center items-center">
        <Link href="" target="_blank"
              className="relative h-[350px] w-[350px] flex justify-center items-center cursor-pointer"
        >
          <Image src={`${router.basePath}/rounded-text.png`}
                 alt=""
                 width={300}
                 height={300}
                 className="animate-spin-slow w-full h-full max-w-[400px] max-h-[400px]"
          />
            <RiGithubFill className="absolute text-5xl font-light animate-pulse"/>
        </Link>
      </div>
  )
};

export default ProjectsBtn;
