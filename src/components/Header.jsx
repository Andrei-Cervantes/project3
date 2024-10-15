import img1 from "../assets/display-image-1.png";
import img2 from "../assets/display-image-2.png";
import quality from "../assets/quality.svg";
import innovation from "../assets/innovation.svg";
import customer from "../assets/customer-service.svg";

const Header = () => {
  return (
    <div>
      <div className="custom-gradient flex flex-col md:flex-row justify-center gap-5 items-center py-[50px]">
        <img src={img1} className="w-[90%] md:w-[45%]" />
        <img src={img2} className="w-[90%] md:w-[35%]" />
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-14">
        <div className="bg-primary text-white p-10 rounded-r-3xl">
          <h1 className="font-oswald text-[50px] md:text-[70px] font-semibold max-w-[700px]">
            Quality Fabrication, Exceptional Results
          </h1>
          <p className="max-w-[700px] text-[24px]">
            Welcome to Stema, your premier destination for high-quality
            fabricated metal products. We specialize in custom metal
            fabrication, offering a wide range of services to meet all your
            manufacturing needs. Our state-of-the-art facility and experienced
            team ensure precision, durability, and excellence in every project.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5">
          <div className="flex justify-center items-center gap-5">
            <img src={quality} />
            <p className="font-bold text-[30px] md:text-[40px] text-primary max-w-[290px]">
              QUALITY EXCELLENCE
            </p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src={innovation} />
            <p className="font-bold text-[30px] md:text-[40px] text-primary max-w-[290px]">
              INNOVATION
            </p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src={customer} />
            <p className="font-bold text-[30px] md:text-[40px] text-primary max-w-[290px]">
              CUSTOMER-DRIVEN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
