import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import BusinessCard from "../../components/BusinessCard";
import Footer from "../../components/Footer";

const Contact = () => {


    return (
      <div className="h-full pt-16 pb-32 text-center">
        <div className='container mx-auto h-full flex flex-col items-center gap-x-6'>
          <motion.h1
              variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
              className='h1 mt-2 xl:mt-auto uppercase font-light'>
            Get In Touch
          </motion.h1>
            <motion.div
                variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden'
            >
                <BusinessCard/>
            </motion.div>
            <Footer/>
        </div>
      </div>
  )
};

export default Contact;
