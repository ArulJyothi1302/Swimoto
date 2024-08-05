const ContactUs = () => {
  return (
    <div className="Contact-form">
      <h2 className="text-center p-4 m-4">Contact Us</h2>
      <form className="form w-[50%] mx-auto my-0 p-10 m-10">
        <fieldset className="bg-slate-400 p-4 m-4 rounded-xl">
          <div className="flex flex-wrap justify-between p-4 m-4">
            <div className="w-6/12 p-2">
              <input
                className="w-full border border-black p-4 rounded-full "
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-full border border-black rounded-full p-4 block my-4"
                type="number"
                placeholder="ph: +12 345-678-900"
              />
            </div>
            <div className="w-6/12 p-2">
              <input
                className="w-full p-4 border border-black rounded-full"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="border border-black rounded-full p-4 block my-4 w-full"
                type="email"
                placeholder="email"
              />
            </div>
          </div>
          <div className="p-2 mx-4 ">
            <input
              className="border border-black p-4 rounded-lg w-full"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="p-2 my-0 mx-4">
            <textarea
              rows={3}
              className="border border-black p-4  rounded-lg w-full"
              type="text"
              placeholder="Your Message"
            />
          </div>
          <div className="p-4 m-4">
            <button className="bg-sky-600 rounded-lg p-4 w-full hover:border border-solid border-lime-400 text-white font-semibold">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default ContactUs;
