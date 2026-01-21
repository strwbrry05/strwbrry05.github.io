import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import jamBread from "../assets/jamBread.png";
import bBread from "../assets/butterBread.png";

const Contact = () => {
  const form = useRef();
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_message, setMessage] = useState("");

  const [sentMessage, setSentMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSentMessage(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSentMessage(false);
          }, 10000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div
      className="flex justify-center items-center mt-[4em] mb-[4em] text-(--color-white) gap-x-[2em]
    lg:gap-x-[4.75em]
    "
    >
      <div className="hidden md:flex flex-col gap-y-[3em]">
        <img
          src={jamBread}
          alt=""
          className="lg:w-[140px] -rotate-20 md:w-[130px]"
        />
        <img
          src={bBread}
          alt=""
          className="lg:w-[140px] rotate-20 md:w-[130px]"
        />
        <img
          src={jamBread}
          alt=""
          className="lg:w-[140px] -rotate-20 md:w-[130px]"
        />
      </div>
      <div
        className="bg-(--color-blue) flex flex-col w-[300px] justify-center items-center pb-[2.5em] pt-[1em]
      
      md:w-[375px] lg:w-[450px]"
      >
        <h2 className="font-(family-name:--font-titles) text-[2.5rem] mb-[0.75em]">
          get in touch!
        </h2>
        <form
          className="flex flex-col font-(family-name:--font-funtext) w-full px-[1em]
          text-[1.25rem]"
          ref={form}
          onSubmit={sendEmail}
        >
          <div
            className="flex items-center justify-center 
          md:justify-start"
          >
            <label className="border-b-[2px] border-b-(--color-white) border-dashed w-[100px]">
              name:
            </label>
            <input
              type="text"
              value={user_name}
              onChange={(e) => setName(e.target.value)}
              name="user_name"
              className="border-b-[2px] border-b-(--color-white) border-dashed w-[180px]
              md:w-full"
              required
            />
          </div>

          <div
            className="flex items-center justify-center mt-[1.5em]
          md:justify-start"
          >
            <label className="border-b-[2px] border-b-(--color-white) border-dashed w-[100px]">
              email:
            </label>
            <input
              type="email"
              value={user_email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              className="border-b-[2px] border-b-(--color-white) border-dashed w-[180px]
              md:w-full"
              required
            />
          </div>

          <div className="flex flex-col items-start justify-center mt-[1.5em] mb-[1em]">
            <label>message</label>
            <textarea
              name="user_message"
              value={user_message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-[2px] border-(--color-white) border-dashed w-full p-[0.75em] h-[120px]
              md:h-[200px]"
              required
            />
          </div>
          <input
            type="submit"
            value="send"
            className="border-[2px] rounded-[10px] w-[150px] place-self-center h-[40px] mt-[0.75em]
            text-[1.5rem] cursor-pointer active:bg-(--color-white) active:text-(--color-blue) "
          />
        </form>
        {sentMessage && (
          <p className="font-(family-name:--font-funtext) text-[1.15rem] mt-[1em]">
            your message has been sent!
          </p>
        )}
      </div>
      <div className="hidden md:flex flex-col gap-y-[3em]">
        <img
          src={jamBread}
          alt=""
          className="w-[130px] rotate-20 lg:w-[140px]"
        />
        <img
          src={bBread}
          alt=""
          className="w-[130px] -rotate-20 lg:w-[140px]"
        />
        <img
          src={jamBread}
          alt=""
          className="w-[130px] rotate-20 lg:w-[140px]"
        />
      </div>
    </div>
  );
};

export default Contact;
