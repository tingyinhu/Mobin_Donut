import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import DonutModal from "../../ui/DonutModal";

const Donuts = ({ addToCart }) => {
  const [donuts, setDonuts] = useState([]);
  const [likedDonuts, setLikedDonuts] = useState({});
  const [selectedDonut, setSelectedDonut] = useState(null);
  const navigate = useNavigate();

  // Fetch donuts from the mock API
  useEffect(() => {
    fetch("http://localhost:3001/donuts")
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

      {/* donut cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {donuts.map((donut) => (
          <div key={donut.id} className="rounded-l-2xl p-5 relative group">
            {/* Image with View Details button */}
            <div className="relative">
              <img
                src={donut.image}
                alt={donut.name}
                className="w-full h-auto mb-15 rounded-t-2xl"
              />
              {/* Btn */}
              <div className="absolute bottom-8 right-0">
                <Button
                  text="View Details"
                  onClick={() => setSelectedDonut(donut)}
                  variant="secondary"
                  color="burnt-sienna"
                />
              </div>
            </div>

            {/* Card info */}
            <div className="absolute bottom-0 left-0 w-full bg-beige text-peru p-4 rounded-bl-2xl rounded-tr-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h4>
                    {donut.name}{" "}
                    <span className="mx-3 px-2 py-1 bg-peru text-lotion rounded-full">
                      ${donut.price}
                    </span>
                  </h4>
                  <p className="my-3">{donut.description}</p>
                </div>
                <button onClick={() => toggleLike(donut.id)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-2xl ${
                      likedDonuts[donut.id]
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

      {/* Render modal */}
      {selectedDonut && (
        <DonutModal
          donut={selectedDonut}
          onClose={() => setSelectedDonut(null)}
        />
      )}

      <div className="flex justify-center mt-10">
        <Button text="Heart Your Favorites to Cart" onClick={addLikedToCart} />
      </div>
    </section>
  );
};

export default Donuts;
