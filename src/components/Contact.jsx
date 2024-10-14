const Contact = () => {
  return (
    <div id="contact" className="pb-12">
      <div className="h-20 bg-primary"></div>
      <h1 className="bg-white text-center text-primary font-semibold text-[70px]">
        Contact Us
      </h1>
      <div className="bg-primary text-white p-[60px] flex justify-center gap-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.37811438818574!2d121.0552399423561!3d14.7111831299048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0ed2145f7fb%3A0xcdcb8a402a3ea289!2s19%2C%20215%20Dollar%2C%20Novaliches%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1728916622156!5m2!1sen!2sph"
          width="463"
          height="560"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[90%] max-w-[450px] rounded-3xl max-h-[380px]"
        />
        <div className="flex flex-col justify-between gap-5">
          <div className="flex justify-between gap-5">
            <p className="text-[28px] max-w-[380px]">
              Lot 19-B, Blk 215, Dollar St. North Fairview, Quezon City
            </p>
            <div className="max-w-[300px]">
              <div>
                <p className="font-light text-lg">Cellphone Number:</p>
                <p className="text-[28px]">(0917) 875 2044</p>
              </div>
              <div>
                <p className="font-light text-lg">Cellphone Number:</p>
                <p className="text-[28px]">(0998) 850 4201</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="font-light text-lg">Email:</p>
              <p className="text-[28px] hover:underline">
                <a href="mailto:stemasteel@yahoo.com">stemasteel@yahoo.com</a>
              </p>
            </div>
            <div>
              <p className="font-light text-lg">Facebook:</p>
              <p className="text-[28px]">
                Stema Fabricated Metals Manufacturing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
