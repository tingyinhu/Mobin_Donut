import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterBlueberry from "../../Assets/FooterBlueberry.svg";
import FooterCitrus from "../../Assets/FooterCitrus.svg";
import FooterDonut from "../../Assets/FooterDonut.svg";
import FooterEgg from "../../Assets/FooterEgg.svg";
import FooterWheat from "../../Assets/FooterWheat.svg";

const Footer = () => {
  const bottomIcons = [
    FooterWheat,
    FooterEgg,
    FooterBlueberry,
    FooterCitrus,
    FooterDonut,
  ];

  return (
    <footer
      className="bg-peru text-lotion  pt-20  min-h-[250px] flex flex-col justify-between"
      style={{ clipPath: "ellipse(70% 60% at 50% 70%)" }}
    >
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src="/MobinDonutLogo.svg"
          alt="Mobin Donut"
          className="w-20 h-auto"
        />
      </div>

      {/* Social Media */}
      <div className="flex justify-center space-x-4 text-[16px] mt-6">
        <FontAwesomeIcon
          icon={faFacebook}
          className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer hover:scale-110"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer hover:scale-110"
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer hover:scale-110"
        />
      </div>

      {/* Bottom Icons */}
      <div className="flex justify-center items-end space-x-10 mt-15 md:space-x-20">
        {bottomIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            className="w-14 h-auto transition-transform duration-300 hover:-translate-y-2"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
