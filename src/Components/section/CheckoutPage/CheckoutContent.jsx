import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CheckoutContent = ({ cart }) => {
  const [cartItems, setCartItems] = useState(cart);
  const navigate = useNavigate();

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleConfirmOrder = () => {
    navigate("/NotFound");
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const taxes = parseFloat((subtotal * 0.05).toFixed(2));
  const total = subtotal + taxes;
  return (
    <section>
      <h2 className="font-stevie-sans text-sm-h2 md:text-md-h2 lg:text-lg-h2 text-center mt-50 mb-5 text-peru">
        Order Summary
      </h2>
      <div className="mx-auto my-20 p-6 bg-beige rounded-bl-2xl rounded-tr-2xl">
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-stevie-sans font-medium text-sm-p md:text-md-p lg:text-lg-p text-left text-peru">
                    {item.name}
                  </h4>
                  <span className="px-2 py-1 bg-peru text-lotion rounded-full text-[14px]">
                    ${item.price}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center bg-lotion rounded-bl-2xl rounded-tr-2xl mx-1">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="px-5 py-3 cursor-pointer text-peru font-stevie-sans font-medium bg-lotion rounded-bl-2xl"
                  >
                    -
                  </button>
                  <span className="font-stevie-sans font-medium text-peru w-10 text-center bg-lotion">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="px-5 py-3 cursor-pointer text-peru font-stevie-sans font-medium bg-lotion rounded-tr-2xl"
                  >
                    +
                  </button>
                </div>
                {/* Delete Icon */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-3 cursor-pointer text-peru hover:text-burnt-sienna transition-colors"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 my-20 p-5">
          <div className="flex justify-between items-center">
            <p className="font-stevie-sans font-medium text-sm-p md:text-md-p lg:text-lg-p text-black">
              Subtotal
            </p>
            <span className="font-stevie-sans font-medium text-sm-p md:text-md-p lg:text-lg-p text-black">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-stevie-sans font-medium text-sm-p md:text-md-p lg:text-lg-p text-black">
              Taxes
            </p>
            <span className="font-stevie-sans font-medium text-sm-p md:text-md-p lg:text-lg-p text-black">
              ${taxes.toFixed(2)}
            </span>
          </div>
          <div className="mt-5 border-t border-peru"></div>
          <div className="flex justify-between items-center">
            <p className="font-stevie-sans font-medium text-sm-h4 md:text-md-h4 lg:text-lg-h4 text-peru">
              Total
            </p>
            <span className="font-stevie-sans font-medium text-sm-h4 md:text-md-h4 lg:text-lg-h4 text-peru">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Button
            text="Confirm Order"
            color="burnt-sienna"
            onClick={handleConfirmOrder}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutContent;
