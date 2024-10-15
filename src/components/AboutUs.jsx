const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col gap-14 py-20">
      <h1 className="font-semibold text-[70px] text-primary text-end px-20">
        About Us
      </h1>
      <div className="flex gap-5">
        <div className="custom-gradient w-full max-w-[255px] rounded-r-3xl hidden md:block" />
        <div className="bg-primary text-white p-10 rounded-l-3xl">
          <h1 className="font-oswald text-[40px] font-semibold max-w-[700px]">
            WHO WE ARE
          </h1>
          <p className="text-[24px]">
            Stema has been a leader in the metal fabrication industry for over
            [X] years. Founded on the principles of innovation and quality, we
            are dedicated to providing our clients with superior metal products
            and exceptional customer service. Our skilled craftsmen and advanced
            technology allow us to tackle projects of any size and complexity.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="bg-primary text-white p-10 rounded-r-3xl">
          <h1 className="font-oswald text-[40px] font-semibold max-w-[700px]">
            MISSION
          </h1>
          <p className="text-[24px]">
            At Stema, our mission is to provide superior metal fabrication
            solutions that exceed our customers&apos; expectations through
            innovation, precision, and unparalleled customer service. We are
            dedicated to delivering high-quality products, fostering a safe and
            collaborative work environment, and contributing to sustainable
            practices in our industry.
          </p>
        </div>
        <div className="custom-gradient w-full max-w-[255px] rounded-l-3xl hidden md:block" />
      </div>
      <div className="flex gap-5">
        <div className="custom-gradient w-full max-w-[255px] rounded-r-3xl hidden md:block" />
        <div className="bg-primary text-white p-10 rounded-l-3xl">
          <h1 className="font-oswald text-[40px] font-semibold max-w-[700px]">
            VISION
          </h1>
          <p className="text-[24px]">
            Our vision is to be the leading metal fabrication company known for
            our commitment to quality, technological advancement, and
            sustainability. We aim to set the standard in the industry, driving
            innovation and growth while making a positive impact on our
            community and the environment. Through continuous improvement and a
            customer-centric approach, we strive to be the trusted partner of
            choice for all metal fabrication needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
