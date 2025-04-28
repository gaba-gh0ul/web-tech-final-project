import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} Greko Taco. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
