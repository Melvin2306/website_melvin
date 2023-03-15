import React from "react";
import Image from "next/image";
import logo from "./../../../public/logo-new.png";

function Logo() {
  return (
    <div>
      <Image data-cy="img" alt="Opinio Logo" src={logo} width={50} placeholder="blur" />
    </div>
  );
}

export default Logo;
