import {Poppins} from '@next/font/google';

import Nav from '../components/Nav'
import TopLeftImg from "../components/TopLeftImg";
import Header from "../components/Header";
import {useRouter} from "next/router";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const Layout = ({children}) => {
    const router = useRouter();
    const pathname = router.pathname
  return(
      <div className={`${pathname === "/" && 'page'} bg-white top-0 bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
        <TopLeftImg/>
        <Nav/>
        <Header/>
        {children}
      </div>
  );
};

export default Layout;
