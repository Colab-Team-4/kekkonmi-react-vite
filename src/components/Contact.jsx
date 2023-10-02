import React from "react";

function Contact() {
  return (
    <div className="contact flex items-center justify-center mt-[5vh] mb-[10vh]">
      <div className="contact-center flex flex-col gap-14">
        <h1 className="w-full text-center tracking-tight">Contact Us</h1>
        <form
          action=""
          method="POST"
          className="flex flex-col justify-center gap-10 w-[70vw]"
        >
          <div className="flex gap-6">
            {/* First Name */}
            <div className="firstName flex basis-1/2 flex-col ">
              <label for="fName">First Name</label>
              <input
                type="text"
                name="fName"
                placeHolder="Jane"
                className="inputText"
              ></input>
            </div>
            {/* End of First Name */}
            {/* Last Name */}
            <div className="lastName flex basis-1/2 flex-col">
              <label for="lName">Last Name</label>
              <input
                type="text"
                name="lName"
                placeHolder="Doe"
                className="inputText"
              ></input>
            </div>
            {/* End of Last Name */}
          </div>
          <div className="flex gap-6">
            {/* Email */}
            <div className="email flex basis-1/2 flex-col">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                placeHolder="janedoe@flymail.com"
                className="inputText"
              ></input>
            </div>
            {/* End of Email */}
            {/* Phone */}
            <div className="phone flex basis-1/2 flex-col">
              <label for="phone">Phone no</label>
              <input
                type="text"
                name="phone"
                placeHolder="(555) 555-5555"
                className="inputText"
              ></input>
            </div>
            {/* End of Phone */}
          </div>
          {/* Message */}
          <div className="message mb-7 flex w-full flex-col">
            <label for="message">Message</label>
            <textarea
              name="message"
              className="inputText"
              placeholder="Write your message here"
              rows="8"
            ></textarea>
          </div>
          {/* end of Message */}
          <input
            type="submit"
            className="btn-solid btn-submit cursor-pointer px-10 w-80 mx-auto"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
