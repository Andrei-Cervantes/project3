const Contact = () => {
  return (
    <div id="contact" className="pb-12">
      <div className="h-20 bg-primary"></div>
      <h1 className="bg-white text-center text-primary font-semibold text-[70px]">
        Contact Us
      </h1>
      <div className="bg-primary text-white p-[60px] flex justify-center gap-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.10585443831!2d121.06843577457475!3d14.706605374473645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaec5cf1db9253d97%3A0x3aa4d6ce71cfe84a!2sThe%20Medical%20Avenue!5e0!3m2!1sen!2sph!4v1716361939097!5m2!1sen!2sph"
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
              123 Medical Avenue, Barangay Health Center, Metroville City, Metro
              Manila, Philippines
            </p>
            <div className="max-w-[300px]">
              <div>
                <p className="font-light text-lg">Cellphone Number:</p>
                <p className="text-[28px]">(0912) 345 6789</p>
              </div>
              <div>
                <p className="font-light text-lg">Telephone:</p>
                <p className="text-[28px]">(02) 123 4567</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="font-light text-lg">Email:</p>
              <p className="text-[28px] hover:underline">
                <a href="mailto:samplesalesemail@gmail.com">
                  samplesalesemail@gmail.com
                </a>
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
