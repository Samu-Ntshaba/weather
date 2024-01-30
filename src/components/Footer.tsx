// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-1 text-sm fixed bottom-0 w-full">
      <p className="text-center font-semibold">Created by Simukelo Ntshaba</p>
      <a
        href="https://samu-dev.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center mt-2 no-underline hover:underline text-blue-100"
      >
        Visit My Profile
      </a>
    </footer>
  );
};

export default Footer;
