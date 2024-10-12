import logo from "../assets/light-logo.svg";
import { Mail, Facebook, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-white text-[24px]">
      <div className="bg-primary flex justify-around items-start p-10 pb-[150px]">
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
        <div className="flex gap-4 flex-col max-w-[475px]">
          <div className="flex flex-row gap-4">
            <Facebook size={40} />
            Stema Fabricated Metals Manufacturing
          </div>
          <div className="flex flex-row gap-4">
            <Mail size={40} />
            samplesalesemail@gmail.com
          </div>
          <div className="flex flex-row gap-4">
            <PhoneCall size={40} />
            (0912) 345 6789
          </div>
        </div>
      </div>
      <div className="bg-footer flex justify-between p-[30px] oxygen">
        <p className="text-[20px]">
          Copyright &copy; {new Date().getFullYear()} Stema Fabricated Metals
          Manufacturing. All Rights Reserved
        </p>
        <p className="text-[20px]">Hire Developers</p>
      </div>
    </div>
  );
};

export default Footer;
