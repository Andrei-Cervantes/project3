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
        <div className="flex flex-wrap flex-grow gap-6 mt-10 md:mt-0 p-5">
          <div>
            <p className="text-[40px] font-light">01</p>
            <p className="text-[32px]">Metal Fabrication and Welding</p>
            <p className="text-[20px] font-light">
              This service involves custom cutting, bending, and assembling
              metal components tailored to specific needs. Skilled welders use
              techniques like MIG and TIG welding to ensure strong, secure
              joints.
            </p>
          </div>
          <div>
            <p className="text-[40px] font-light">02</p>
            <p className="text-[32px]">CNC Machining and Laser Cutting</p>
            <p className="text-[20px] font-light">
              CNC machining delivers high precision in shaping metal parts,
              perfect for complex designs. Laser cutting provides clean edges
              and intricate patterns across a variety of materials.
            </p>
          </div>
          <div>
            <p className="text-[40px] font-light">03</p>
            <p className="text-[32px]">Metal Finishing and Coating</p>
            <p className="text-[20px] font-light">
              Surface treatments such as powder coating and plating enhance
              durability and appearance, protecting metals from corrosion. These
              processes can be customized for specific colors and textures.
            </p>
          </div>
          <div>
            <p className="text-[40px] font-light">04</p>
            <p className="text-[32px]">Prototyping and Assembly Services</p>
            <p className="text-[20px] font-light">
              Prototyping helps test and refine designs before production,
              minimizing errors. Assembly services integrate components into
              complete products, ensuring proper functionality and adherence to
              specifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
