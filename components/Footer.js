
const Footer = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full flex flex-col items-center justify-center absolute bottom-2">
            <div className="text-accent py-4 w-full uppercase">
                &copy; {currentYear} Keith Mzaza. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
