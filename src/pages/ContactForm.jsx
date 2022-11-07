import React, { useState } from "react";

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="h-[600px] text-center text-2xl mb-20 pt-20">
        <div className="text-4xl">Tack!</div>
        <div className="text-md">Vi hör av oss snart 👋🏻</div>
      </div>
    );
  }

  return (
    <div
      className="h-screen w-full flex-col 
      items-center justify-center"
    >
      <div className="mb-20 pt-20">
        <h3 className="text-center text-[#ffd300] uppercase font-bold text-3xl">Kontakta oss här</h3>
      </div>
      <form
        className="bg-white shadow-md rounded px-20 pt-20 pb-10 mb-14"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Ditt namn"
            name="name"
            className="px-8 py-4 placeholder-gray-400 text-black relative bg-white rounded text-xl border-0 shadow outline-none focus:outline-none focus:ring w-full text-center"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-8 py-3 placeholder-gray-400 text-black relative bg-white rounded text-xl border-0 shadow outline-none focus:outline-none focus:ring w-full text-center"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Ditt meddelnade"
            name="message"
            className="px-8 py-3 placeholder-gray-400  active:bg-[#ffd300] relative bg-white rounded text-xl border-0 shadow outline-none focus:outline-none focus:ring w-full text-center"
            required
          />
        </div>
        <div className="mb-3 pt-0 text-center">
          <button
            className="bg-[#ffd300] text-white active:bg-[#ffd300] font-bold text-l px-16 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Skicka meddelande
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
