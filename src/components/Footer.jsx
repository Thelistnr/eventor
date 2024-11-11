import { FaGithub,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer className="footer flex gap-5 items-center justify-center mt-10 py-2 border-white">
            <div className="text-md font-bold">
                <a href="https://www.linkedin.com/in/elijah-adekoya-b643ba218/" className="gitHub">
                    ©theListnr 2024
                </a>
                </div>
                <a href="https://github.com/Thelistnr" className="socialLink">
                <FaGithub size={20} />
                </a>
        </footer>
     );
}
 
export default Footer;