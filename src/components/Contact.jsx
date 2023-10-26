import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm, ValidationError } from "@formspree/react";

Contact.propTypes = {
  venueName: PropTypes.string,
};
function Contact({ venueName }) {
  const [rows, setRows] = useState(8);
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xpzgbjbd");

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

  // Handle the form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(e); // Submit the form through the handleSubmit function provided by useForm.
  };

  useEffect(() => {
    if (state.succeeded) {
      if (venueName) {
        navigate(`/venues/${venueName}/contact/confirmation`);
      } else {
        navigate(`/confirmation`);
      }
    }
  }, [state.succeeded, navigate, venueName]);

  return (
    <div className="contact mb-[10vh] mt-[5vh] flex items-center justify-center">
      <div className="contact-center flex w-5/6 max-w-6xl flex-col gap-20">
        <h1 className="-mb-12 -mt-4 w-full text-center text-2xl font-semibold leading-3 tracking-tight lg:text-4xl lg:font-normal">
          Contact Us
        </h1>
        <form
          method="POST"
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center lg:gap-2"
        >
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-6">
            <div className="firstName flex basis-1/2 flex-col">
              <label className="smallerText" htmlFor="fName">
                First Name
              </label>
              <input
                type="text"
                name="fName"
                placeholder="Jane"
                className="inputText smallerText mb-2 h-12 p-4"
              />
            </div>
            <div className="lastName flex basis-1/2 flex-col">
              <label className="smallerText" htmlFor="lName">
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                placeholder="Doe"
                className="inputText smallerText mb-2 h-12 p-4"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-6">
            <div className="email flex basis-1/2 flex-col">
              <label className="smallerText" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Janedoe@flymail.com"
                className="inputText smallerText mb-2 h-12 p-4"
              />
            </div>
            <div className="phone flex basis-1/2 flex-col">
              <label className="smallerText" htmlFor="phone">
                Phone no
              </label>
              <input
                type="text"
                name="phone"
                placeholder="(555)-555-5555"
                className="inputText smallerText mb-2 h-12 p-4"
              />
            </div>
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="message mb-7 flex w-full flex-col">
            <label className="smallerText" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              className="inputText smallerText w-full p-4"
              placeholder="Write your message here"
              rows={rows}
            />
          </div>
          <button
            type="submit"
            className="btnSolid mx-auto mt-8 flex h-14 w-60 items-center justify-center py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
