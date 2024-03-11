import {Poppins} from '@next/font/google';

import Nav from '../components/Nav'
import Header from "../components/Header";
import BottomRightImg from "./BottomRightImg";
import BottomLeftImg from "./BottomLeftImg";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const Layout = ({children}) => {
  return(
      <div className={`min-h-screen bg-primary top-0 bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
        <Nav/>
        <Header/>
        {children}
        <BottomLeftImg/>
        <BottomRightImg/>
      </div>
  );
};

export default Layout;
