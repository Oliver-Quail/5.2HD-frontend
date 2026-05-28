import VIEWS from "@/misc/VIEWS";
import { Link } from "react-router";


const Footer = () => {

    return (
        <footer className="w-full flex flex-col justify-center bg-black py-10">
            <Link to={VIEWS.INDEX} className="text-white mx-auto">Home</Link>
            <Link to={VIEWS.GALLERY} className="text-white mx-auto">Gallery</Link>
            <Link to={VIEWS.LOGIN} className="text-white mx-auto">Login</Link>
        </footer>
    )
}

export default Footer;