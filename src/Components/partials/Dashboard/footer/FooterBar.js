import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import logo from "../../../../assets/images/logo_horizontal.png";
const FooterBar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="flex flex-col mx-3 bg-gray-800 text-white rounded-lg">
        <div className="w-full draggable">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center w-full my-20">
              <span className="mb-8">
                <img src={logo} className="h-20 w-auto" />
              </span>
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                  <a href="#" className="text-white hover:text-indigo-600">
                    About
                  </a>

                  <a href="#" className="text-white hover:text-indigo-600">
                    Blog
                  </a>
                  <a href="#" className="text-white hover:text-indigo-600">
                    Resources
                  </a>
                  <a href="#" className="text-white hover:text-indigo-600">
                    Help
                  </a>
                </div>
                <div className="flex items-center gap-8">
                  <a
                    href="#"
                    className="text-secondary-700 hover:text-primary-500 text-2xl"
                  >
                    <AiFillFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-secondary-700 hover:text-primary-500 text-2xl"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-secondary-700 hover:text-primary-500 text-2xl"
                  >
                    <IoMdMail />
                  </a>
                  <a
                    href="#"
                    className="text-secondary-700 hover:text-primary-500 text-2xl"
                  >
                    <BiLogoTiktok />
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-base font-normal leading-7 text-center text-grey-700">
                  Created at 2023 in TEK-UP University.
                  <br />
                  Developing by her student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
