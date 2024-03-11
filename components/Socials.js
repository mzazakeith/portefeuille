import Link from 'next/link'

import {RiLinkedinLine, RiGithubLine, RiMailLine} from "react-icons/ri";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {MoonIcon, SunIcon} from "./ThemeSwitcherIcons";


const Socials = () => {
    const [mode, setMode] = useThemeSwitcher();
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

          <button onClick={()=>setMode(mode === "light" ? "dark" : "light")}
                  className="ml-1 flex items-center justify-center rounded-full p-1"
          >
              {mode === "dark" ?
                  <SunIcon className="fill-neutral-900"/>
                  :
                  <MoonIcon className="fill-neutral-900"/>
              }
          </button>
      </div>);
};

export default Socials;
