import logo from "../assets/light-logo.svg";
import { Mail, Facebook, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="bg-primary flex justify-around p-10">
        <img src={logo} />
        <div>
          <ul>
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
        <div>
          <div className="flex flex-row gap-2">
            <Facebook />
            Stema Fabricated Metals Manufacturing
          </div>
          <div className="flex flex-row gap-2">
            <Mail />
            samplesalesemail@gmail.com
          </div>
          <div className="flex flex-row gap-2">
            <PhoneCall />
            (0912) 345 6789
          </div>
        </div>
      </div>
      <div className="bg-footer flex justify-between p-[30px] oxygen">
        <p>
          Copyright &copy; {new Date().getFullYear()} Stema Fabricated Metals
          Manufacturing. All Rights Reserved
        </p>
        <p>Hire Developers</p>
      </div>
    </div>
  );
};

export default Footer;
