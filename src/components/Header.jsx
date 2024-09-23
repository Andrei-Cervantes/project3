import img1 from "../assets/display-image-1.png";
import img2 from "../assets/display-image-2.png";

const Header = () => {
  return (
    <div className="custom-gradient flex flex-row justify-center gap-5 items-center py-[50px]">
      <img src={img1} className="w-[45%]" />
      <img src={img2} className="w-[35%]" />
    </div>
  );
};

export default Header;
