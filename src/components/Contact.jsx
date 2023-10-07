import { useState, useEffect } from "react";

function Contact() {
  const [rows, setRows] = useState(8); // initial value

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setRows(6);
      } else {
        setRows(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="contact mb-[10vh] mt-[5vh] flex snap-center scroll-mt-32 items-center justify-center lg:snap-center lg:scroll-mt-32">
      <div className="contact-center flex w-5/6 max-w-6xl flex-col gap-20">
        <h1 className="-mb-12 w-full text-center tracking-tight">Contact Us</h1>
        <form method="POST" className="flex flex-col justify-center lg:gap-1">
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-6">
            {/* First Name */}
            <div className="firstName flex basis-1/2 flex-col ">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                name="fName"
                placeholder="Jane"
                className="input-text p-2"
              />
            </div>
            {/* End of First Name */}
            {/* Last Name */}
            <div className="lastName flex basis-1/2 flex-col">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                name="lName"
                placeholder="Doe"
                className="input-text p-2"
              />
            </div>
            {/* End of Last Name */}
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-6">
            {/* Email */}
            <div className="email flex basis-1/2 flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Janedoe@flymail.com"
                className="input-text p-2"
              />
            </div>
            {/* End of Email */}
            {/* Phone */}
            <div className="phone flex basis-1/2 flex-col">
              <label htmlFor="phone">Phone no</label>
              <input
                type="text"
                name="phone"
                placeholder="(555)-555-5555"
                className="input-text p-2"
              />
            </div>
            {/* End of Phone */}
          </div>
          {/* Message */}
          <div className="message mb-7 flex w-full flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="input-text w-full p-2"
              placeholder="Write your message here"
              rows={rows}
            />
          </div>
          {/* end of Message */}
          <button
            type="submit"
            className="btn-solid btn-weight-normal mx-auto w-80 cursor-pointer p-5 px-10 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
