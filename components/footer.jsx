// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-4 bottom-0 left-0 w-full">
      <div className="container mx-auto px-6 flex justify-between">
        <div className="text-left">
          <h3 className="text-lg font-semibold">Amit's Portfolio</h3>
        </div>
        <div className="text-right">
          <p className="text-sm">© 2024 Amit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
