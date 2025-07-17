import Landing from "../screens/Landing";
import About from "../screens/About";
import Services from "../screens/Services";
import Contact from "../screens/Contact";


const Paths = [
    { path: "/", element: <Landing /> },
    { path: "/about-us", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact-us", element: <Contact /> },



];

export default Paths;
