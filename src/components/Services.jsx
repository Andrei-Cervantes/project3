import img2 from "../assets/display-image-2.png";

const Services = () => {
  return (
    <div id="services" className="text-primary flex flex-col gap-14 py-20">
      <h1 className="font-semibold text-[70px] text-primary text-end px-20">
        Services
      </h1>
      <div className="flex flex-col lg:flex-row">
        <img
          src={img2}
          className="w-[90%] max-w-[800px] translate-x-[-10%]"
          alt="services"
        />
        <div className="flex flex-wrap flex-grow gap-10 mt-10 md:mt-0 p-5">
          <div>
            <p className="text-[40px] font-light">01</p>
            <p className="text-[32px]">Medical Equipment Sales</p>
            <p className="text-[20px] font-light">
              Provide a wide range of medical equipment and supplies for sale to
              hospitals, clinics, medical practices, and other healthcare
              facilities.
            </p>
          </div>
          <div>
            <p className="text-[40px] font-light">02</p>
            <p className="text-[32px]">Medical Equipment Sales</p>
            <p className="text-[20px] font-light">
              Provide a wide range of medical equipment and supplies for sale to
              hospitals, clinics, medical practices, and other healthcare
              facilities.
            </p>
          </div>
          <div>
            <p className="text-[40px] font-light">03</p>
            <p className="text-[32px]">Medical Equipment Sales</p>
            <p className="text-[20px] font-light">
              Provide a wide range of medical equipment and supplies for sale to
              hospitals, clinics, medical practices, and other healthcare
              facilities.
            </p>
          </div>
          <div>
            <p className="text-[40px] font-light">04</p>
            <p className="text-[32px]">Medical Equipment Sales</p>
            <p className="text-[20px] font-light">
              Provide a wide range of medical equipment and supplies for sale to
              hospitals, clinics, medical practices, and other healthcare
              facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
