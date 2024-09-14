import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <p className="text-sm">Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" className="h-8 w-auto" />
      </div>
    </footer>
  );
};

export default Footer;
