import Link from 'next/link'

import {RiLinkedinLine, RiGithubLine, RiMailLine} from "react-icons/ri";


const Socials = () => {
  return (
      <div className="flex items-center gap-x-5">
        <Link target="_blank" href="" className="hover:text-accent transition-all duration-300 text-[1.50rem]">
          <RiLinkedinLine/>
        </Link>

        <Link target="_blank" href="" className="hover:text-accent transition-all duration-300 text-[1.50rem]">
          <RiGithubLine/>
        </Link>

      <Link target="_blank" href="" className="hover:text-accent transition-all duration-300 text-[1.40rem]">
          <RiMailLine/>
      </Link>
      </div>);
};

export default Socials;
