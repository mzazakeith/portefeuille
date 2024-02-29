import {Poppins} from '@next/font/google';

import Nav from '../components/Nav'
import TopLeftImg from "../components/TopLeftImg";
import Header from "../components/Header";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const Layout = ({children}) => {
  return(
      <div className={`page bg-site text-white bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
        <TopLeftImg/>
        <Nav/>
        <Header/>
        {children}
      </div>
  );
};

export default Layout;
