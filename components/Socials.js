import Link from 'next/link'

import {RiLinkedinLine, RiGithubLine} from "react-icons/ri";
import {SiHashnode} from "react-icons/si";


const Socials = () => {
  return (
      <div className="flex items-center gap-x-5">
        <Link href="" className="hover:text-accent transition-all duration-300 text-[1.50rem]">
          <RiLinkedinLine/>
        </Link>

        <Link href="" className="hover:text-accent transition-all duration-300 text-[1.50rem]">
          <RiGithubLine/>
        </Link>

      <Link href="" className="hover:text-accent transition-all duration-300 text-[1.40rem]">
          <SiHashnode/>
      </Link>
      </div>);
};

export default Socials;
