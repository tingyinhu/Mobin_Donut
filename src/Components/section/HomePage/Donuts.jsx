import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const Donuts = ({ addToCart }) => {
  const [donuts, setDonuts] = useState([]);
  const [likedDonuts, setLikedDonuts] = useState({});
  const navigate = useNavigate();

  // Fetch donuts from the mock API
  useEffect(() => {
    fetch("https://veil-amazing-eucalyptus.glitch.me/donuts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setDonuts(data);
      })
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  const toggleLike = (id) => {
    setLikedDonuts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addLikedToCart = () => {
    const liked = donuts.filter((donut) => likedDonuts[donut.id]);
    liked.forEach((donut) => addToCart(donut));
    navigate("/checkout");
  };

  return (
    <section id="Donuts" className="py-25 scroll-mt-20">
      <h2 className="font-stevie-sans text-sm-h2 md:text-md-h2 lg:text-lg-h2 text-burnt-sienna">
        Pick Your Perfect Donuts
      </h2>
      <p className="my-5 max-w-2xl text-sm-p md:text-md-p lg:text-lg-p font-light text-black">
        Love it? Heart it, then grab it in your cart!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {donuts.map(({ id, name, price, description, image }) => (
          <div key={id} className="rounded-l-2xl p-5 relative">
            <img src={image} alt={name} className="w-full h-auto mb-15" />
            <div className="absolute bottom-0 left-0 w-full bg-beige text-peru p-4 rounded-bl-2xl rounded-tr-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h4>
                    {name}{" "}
                    <span className="mx-3 px-2 py-1 bg-peru text-lotion rounded-full">
                      ${price}
                    </span>
                  </h4>
                  <p className="my-3">{description}</p>
                </div>
                <button onClick={() => toggleLike(id)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-2xl mx-5 ${
                      likedDonuts[id]
                        ? "text-burnt-sienna"
                        : "text-red fa-beat-fade cursor-pointer"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          text="Heart Your Favorites to Cart"
          onClick={addLikedToCart}
          color="burnt-sienna"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default Donuts;
