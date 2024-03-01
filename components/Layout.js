import {Poppins} from '@next/font/google';

import Nav from '../components/Nav'
import Header from "../components/Header";
import {useRouter} from "next/router";
import BottomRightImg from "./BottomRightImg";
import BottomLeftImg from "./BottomLeftImg";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const Layout = ({children}) => {
    const router = useRouter();
    const pathname = router.pathname
  return(
      <div className={`${pathname === "/" && 'page'} bg-[#ebdfd5] top-0 bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
        <Nav/>
        <Header/>
        {children}
        <BottomLeftImg/>
        <BottomRightImg/>
      </div>
  );
};

export default Layout;
