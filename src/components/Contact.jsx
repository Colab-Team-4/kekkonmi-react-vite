import React from "react";

function Contact() {
  return (
    <div className="contact flex min-h-screen min-w-full items-center justify-center border-4">
      <div className="contact-center mx-60 flex flex-col gap-14">
        <h1 className="w-full text-center ">Contact Us</h1>
        <form
          action=""
          method="POST"
          className="flex flex-wrap justify-center gap-4"
        >
          {/* First Name */}
          <div className="firstName flex w-[47%] flex-col gap-2 ">
            <label for="fName">First Name</label>
            <input
              type="text"
              name="fName"
              placeHolder="Jane"
              className="inputText h-12"
            ></input>
          </div>
          {/* End of First Name */}
          {/* Last Name */}
          <div className="lastName flex w-[47%] flex-col gap-2">
            <label for="lName">Last Name</label>
            <input
              type="text"
              name="lName"
              placeHolder="Doe"
              className="inputText"
            ></input>
          </div>
          {/* End of Last Name */}
          {/* Email */}
          <div className="email flex w-[47%] flex-col gap-2">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeHolder="janedoe@flymail.com"
              className="inputText h-12"
            ></input>
          </div>
          {/* End of Email */}
          {/* Phone */}
          <div className="phone flex w-[47%] flex-col gap-2">
            <label for="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeHolder="(123)-456-7890"
              className="inputText h-12"
            ></input>
          </div>
          {/* End of Phone */}
          {/* Message */}
          <div className="message mb-7 flex w-[95%] flex-col gap-2">
            <label for="message">Message</label>
            <textarea
              name="message"
              className="inputText"
              placeholder="Write your message here"
              rows="8"
            ></textarea>
          </div>
          {/* end of Message */}
          <input type="submit" className="submit cursor-pointer"></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
