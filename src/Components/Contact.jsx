import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div className="flex justify-center items-center mt-[4em] mb-[4em] text-(--color-white) ">
      <div className="bg-(--color-blue) flex flex-col w-[300px] justify-center items-center pb-[2.5em] pt-[1em]">
        <h2 className="font-(family-name:--font-titles) text-[2.5rem] mb-[0.75em]">
          get in touch!
        </h2>
        <form
          className="flex flex-col font-(family-name:--font-funtext) w-full px-[1em]
          text-[1.25rem]"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex items-center justify-center">
            <label className="border-b-[2px] border-b-(--color-white) border-dashed pr-[1em]">
              name:
            </label>
            <input
              type="text"
              name="user_name"
              className="border-b-[2px] border-b-(--color-white) border-dashed"
              required
            />
          </div>

          <div className="flex items-center justify-center mt-[1.5em]">
            <label className="border-b-[2px] border-b-(--color-white) border-dashed pr-[1em]">
              email:
            </label>
            <input
              type="email"
              name="user_email"
              className="border-b-[2px] border-b-(--color-white) border-dashed "
              required
            />
          </div>

          <div className="flex flex-col items-start justify-center mt-[1.5em] mb-[1em]">
            <label>message</label>
            <textarea
              name="user_message"
              className="border-[2px] border-(--color-white) border-dashed w-full p-[0.75em]"
              required
            />
          </div>
          <input
            type="submit"
            value="send"
            className="border-[2px] rounded-[10px] w-[150px] place-self-center h-[40px] mt-[0.75em]
            text-[1.5rem]"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
