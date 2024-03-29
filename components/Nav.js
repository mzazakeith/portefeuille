// icons
import {FaCode, FaHome, FaPhone, FaUser} from "react-icons/fa";
import {FaRectangleList} from "react-icons/fa6";

import Link from 'next/link'

import {useRouter} from "next/router";


// nav data
export const navData = [
  { name: 'home', path: '/', icon: <FaHome /> },
  { name: 'about', path: '/about', icon: <FaUser /> },
  { name: 'projects', path: '/projects', icon: <FaCode /> },
  { name: 'more', path: '/more', icon: <FaRectangleList /> },
  {name: 'contact', path: '/contact', icon: <FaPhone/>},
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname

  return (
      <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto
      xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
        <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40
        xl:px-0 h-[80px] xl:h-max py-8 bg-[#a49d95]/20 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>

          {navData.map((link,index)=>{
            const contactItemStyles = link.name === 'contact' && 'xl:block hidden';
            return <Link
                className={`${link.path === pathname && 'text-accent'} relative flex items-center group 
                hover:text-accent transition-all duration-300 ${contactItemStyles}`}
                key={index} href={link.path}>
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-neutral-900 items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none uppercase'>{link.name}</div>
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px]
                  border-r-0 absolute -right-2'></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          })}

        </div>
      </nav>
  );
};

export default Nav;
