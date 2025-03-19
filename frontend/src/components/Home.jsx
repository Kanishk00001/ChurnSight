import React from "react";
import { Link } from "react-router";
import LOGO1 from "../assets/img1.png";
import LOGO2 from "../assets/img2.png";
import LOGO3 from "../assets/img3.png";
import LOGO4 from "../assets/img4.png";

function Home() {
  return (
    <div className="border-4 h-full w-full">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-25 mx-7 mb-30">
        <Link to="/" className="flex items-center">
          <img
            src={LOGO1}
            className="mr-3 lg:h-full w-full rounded-lg h-120 "
            alt="Logo"
          />
        </Link>

        <Link to="/" className="flex items-center">
          <img
            src={LOGO2}
            className="mr-3 lg:h-full w-full rounded-lg h-120 "
            alt="Logo"
          />
        </Link>
        <Link to="/" className="flex items-center">
          <img
            src={LOGO3}
            className="mr-3 lg:h-full w-full rounded-lg h-120 "
            alt="Logo"
          />
        </Link>
        <Link to="/" className="flex items-center">
          <img
            src={LOGO4}
            className="mr-3 lg:h-full w-full rounded-lg h-120 "
            alt="Logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
