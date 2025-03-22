import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
import TastingPartyFreeCoffee from "../../../Assets/TastingPartyFreeCoffee.png";
import TastingPartySVG from "../../../Assets/TastingParty.svg";
import Button from "../../ui/Button";

const TastingParty = () => {
  const navigate = useNavigate();

  const fillRsvp = () => {
    navigate("/NotFound");
  };

  return (
    <section id="Tasting Party" className="scroll-mt-20 py-25 relative">
      {/* Content Container */}
      <div className="grid grid-cols-12 gap-5">
        {/* Left Content */}
        <div className="col-span-12 md:col-span-7 text-left my-5">
          {/* Title */}
          <h2 className="font-stevie-sans text-peru text-sm-h2 md:text-md-h2 lg:text-lg-h2">
            Tasting Party
          </h2>

          {/* What to Expect ? */}
          <h3 className="font-stevie-sans text-burnt-sienna text-sm-h3 md:text-md-h3 lg:text-lg-h3 my-5">
            What to Expect ?
          </h3>

          {/* Image */}
          <img
            src={TastingPartyFreeCoffee}
            alt="Free Coffee"
            className="w-[150px] h-auto my-20 mx-auto"
          />

          {/* Description */}
          <p className="font-stevie-sans font-light text-black text-sm-p md:text-md-p lg:text-lg-p my-10">
            Join us for an exciting tasting event where you can sample our
            latest donut creations, participate in fun activities, and connect
            with fellow donut enthusiasts.
          </p>

          <p className="font-stevie-sans font-light text-black text-sm-p md:text-md-p lg:text-lg-p my-10">
            As a thank you for attending, each participant will receive a free
            cup of our special Mobin coffee!
          </p>

          {/* Place & Time */}
          <div className="grid grid-cols-12 gap-4 my-10">
            {/* Left Column */}
            <div className="col-span-6">
              <h4 className="font-stevie-sans text-burnt-sienna text-sm-h4 md:text-md-h4 lg:text-lg-h4">
                Place
              </h4>
              <p className="font-stevie-sans text-black text-sm-p md:text-md-p lg:text-lg-p">
                Mobin Donut Café, Main Street.
              </p>
            </div>
            {/* Right Column */}
            <div className="col-span-6">
              <h4 className="font-stevie-sans text-burnt-sienna text-sm-h4 md:text-md-h4 lg:text-lg-h4">
                Time
              </h4>
              <p className="font-stevie-sans text-black text-sm-p md:text-md-p lg:text-lg-p">
                July 7, 2024, 2 PM - 5 PM
              </p>
            </div>
          </div>

          {/* Message */}
          <p className="font-stevie-sans font-light text-black text-sm-p md:text-md-p lg:text-lg-p my-10">
            We look forward to celebrating with you and making this event
            memorable. Don’t miss out on this sweet opportunity to connect with
            your community, bite by bite.
          </p>

          {/* Divider */}
          <hr className="border-t border-burnt-sienna my-5" />
          <FontAwesomeIcon icon={faCookie} className="text-peru text-2xl" />

          {/* Sign-off */}
          <p className="font-stevie-sans font-light text-black text-sm-p md:text-md-p lg:text-lg-p my-10 flex items-center">
            Warm regards,
            <br />
            The Mobin Donut Team
          </p>
        </div>

        {/* Right Content */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center self-start sticky top-60">
          <img
            src={TastingPartySVG}
            alt="Tasting Party"
            className="w-[300px] h-auto mb-5"
          />

          {/* Button */}
          <p className="text-burnt-sienna font-stevie-sans font-light text-sm-p md:text-md-p lg:text-lg-p text-center my-5">
            Click the button to fill out the form!
          </p>
          <div className="flex justify-center mt-10">
          <Button
            text="RSVP Now"
            color="burnt-sienna"
            onClick={fillRsvp}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default TastingParty;