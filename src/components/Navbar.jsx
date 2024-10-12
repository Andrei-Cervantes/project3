import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around items-center py-10">
      <img src={logo} className="w-[200px]" />
      <ul className="flex flex-row gap-5 text-white bg-primary p-6 rounded-3xl">
        <li>
          <a className="text-[20px] font-semibold" href="#">
            HOME
          </a>
        </li>
        <li>
          <a className="text-[20px] font-semibold" href="#about">
            ABOUT US
          </a>
        </li>
        <li>
          <a className="text-[20px] font-semibold" href="#products">
            PRODUCTS
          </a>
        </li>
        <li>
          <a className="text-[20px] font-semibold" href="#services">
            SERVICES
          </a>
        </li>
      </ul>
      <button className="bg-primary text-white oswald text-[28px] font-semibold py-[1rem] px-[1.5rem] rounded-3xl">
        <a href="#contact">CONTACT US</a>
      </button>
    </div>
  );
};

export default Navbar;
