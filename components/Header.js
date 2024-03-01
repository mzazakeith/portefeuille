import Link from 'next/link'

import Socials from "../components/Socials";

const Header = () => {
  return (
      <header className='fixed z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
          <div className='container mx-auto'>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
                  <Link className="text-[2rem] font-poppins"  href="">
                      <span>Mzaza<span className="text-accent">.</span></span>
                  </Link>

                  <Socials/>
              </div>
          </div>

      </header>);
};

export default Header;
