import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <div data-cy="navbar" className="flex items-center w-full justify-between gap-5 p-4 bg-green dark:bg-gray-900 text-white rounded">
      <div className="flex items-center gap-5">
        
        <Logo />

        <a data-cy="home" className="hover:underline hover:" href="/">Home</a>
        <a data-cy="cv" className="hover:underline" href="/cv">CV</a>
        <a data-cy="about-navbar" className="hover:underline" href="/about">About</a>
      </div>
    </div>
  );
}

export default Navbar;
