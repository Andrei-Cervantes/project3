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
            At Stema, we are a leading fabricated metals manufacturing company
            dedicated to delivering high-quality, precision-engineered metal
            solutions. With a commitment to innovation and craftsmanship, we
            serve a diverse range of industries, ensuring that our products meet
            the highest standards of performance and durability.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="bg-primary text-white p-10 rounded-r-3xl">
          <h1 className="font-oswald text-[40px] font-semibold max-w-[700px]">
            MISSION
          </h1>
          <p className="text-[24px]">
            Our mission at Stema is to deliver superior metal fabrication
            services that empower our clients to achieve their goals. We are
            committed to utilizing cutting-edge technology and skilled
            craftsmanship to provide customized solutions tailored to each
            project’s unique requirements. By prioritizing safety,
            sustainability, and ethical practices, we aim to enhance operational
            efficiency and minimize our environmental impact. We believe in
            building lasting partnerships with our customers, grounded in
            transparency and exceptional service, to ensure their success and
            satisfaction in every endeavor.
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
            At Stema, our vision is to be the leading innovator in the
            fabricated metals industry, setting benchmarks for quality,
            sustainability, and customer satisfaction. We aspire to create a
            future where our advanced metal solutions not only meet the evolving
            needs of our clients but also contribute positively to the
            environment and the communities we serve. By fostering a culture of
            continuous improvement and collaboration, we aim to inspire trust
            and confidence in our brand, making Stema synonymous with excellence
            in metal fabrication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
