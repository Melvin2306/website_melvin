import React from "react";
import Logo from "./Logo";

var current_year = new Date().getFullYear();

function Footer() {
  return (
    <div data-cy="footer" className="flex flex-wrap position-absolut items-center justify-evenly w-full gap-5 p-4 bg-green dark:bg-gray-900 text-white rounded">
      <div>
        <Logo />
      </div>

      <div>
        <a data-cy="about-footer" className="hover:underline" href="/about">
          About
        </a>
      </div>

      <div>
        <a data-cy="contact" className="hover:underline" href="/contact">
          Contact Me
        </a>
      </div>

      <div>
        <a data-cy="imprint" className="hover:underline" href="/imprint">
          Imprint
        </a>
      </div>

      <div>
        <div id="imprint" className="text-left text-xs">
          Melvin Rinkleff <br />
          Thomasstraße 75 <br />
          12053 Berlin
        </div>
      </div>
    </div>
  );
}

export default Footer;
