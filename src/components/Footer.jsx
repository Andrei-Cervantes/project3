import logo from "../assets/light-logo.svg";
import { Mail, Facebook, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-white text-[24px]">
      <div className="bg-primary flex flex-col md:flex-row justify-around items-center md:items-start gap-10 p-10 md:pb-[150px]">
        <img src={logo} />
        <div className="max-w-[166px]">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center md:justify-start items-center md:items-start text-center md:text-left flex-col max-w-[475px]">
          <div className="flex flex-row gap-4">
            <Facebook size={40} className="hidden md:block" />
            Stema Fabricated Metals Manufacturing
          </div>
          <div className="flex flex-row gap-4">
            <Mail size={40} className="hidden md:block" />
            <a href="mailto:stemasteel@yahoo.com">stemasteel@yahoo.com</a>
          </div>
          <div className="flex flex-row gap-4">
            <PhoneCall size={40} className="hidden md:block" />
            <div className="flex flex-col">
              <p>(0917) 875 2044</p>
              <p>(0998) 850 4201</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer p-[30px] oxygen text-center md:text-left">
        <p className="text-[20px]">
          Copyright &copy; {new Date().getFullYear()} Stema Fabricated Metals
          Manufacturing. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
