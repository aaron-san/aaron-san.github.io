import React from "react";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto shadow-md p-6">
      <h1 className="pt-30%">Contact</h1>
      <p className="w-500px h-40px">
        You can email me at{" "}
        <span className="underline text-cyan-600">aaronhardy6@gmail.com</span>{" "}
        or find my work on{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/aaron-san">
          GitHub
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;
