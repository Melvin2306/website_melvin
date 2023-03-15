import React from "react";
import Navbar from "../components/website/Navbar";
import Footer from "../components/website/Footer";
import Menu from "../components/application/Menu";

function HomePage() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Navbar />
        <Menu />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
  return <div>Welcome to Opinio!</div>
}

export default HomePage;