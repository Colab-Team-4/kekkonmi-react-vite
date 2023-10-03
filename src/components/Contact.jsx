function Contact() {
  return (
    <div className="contact mb-[10vh] mt-[5vh] flex items-center justify-center">
      <div className="contact-center flex flex-col gap-14">
        <h1 className="w-full text-center tracking-tight">Contact Us</h1>
        <form
          method="POST"
          className="flex w-[70vw] flex-col justify-center gap-10"
        >
          <div className="flex gap-6">
            {/* First Name */}
            <div className="firstName flex basis-1/2 flex-col ">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                name="fName"
                placeholder="Jane"
                className="inputText"
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
                className="inputText"
              />
            </div>
            {/* End of Last Name */}
          </div>
          <div className="flex gap-6">
            {/* Email */}
            <div className="email flex basis-1/2 flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Janedoe@flymail.com"
                className="inputText"
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
                className="inputText"
              />
            </div>
            {/* End of Phone */}
          </div>
          {/* Message */}
          <div className="message mb-7 flex w-full flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="inputText"
              placeholder="Write your message here"
              rows="8"
            />
          </div>
          {/* end of Message */}
          <button
            type="submit"
            className="btn-solid btn-submit mx-auto w-80 cursor-pointer px-10"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
