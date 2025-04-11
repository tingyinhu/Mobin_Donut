import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faListUl,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const DonutModal = ({ donut, onClose }) => {
  if (!donut) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-lotion max-w-md w-full rounded-2xl p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-6 right-6 text-2xl text-burnt-sienna hover:scale-110 transition-transform"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Image */}
        <img
          src={donut.image}
          alt={donut.name}
          className="w-60 h-auto m-auto mb-4"
        />

        {/* Title and price */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semi-bold text-burnt-sienna">
            {donut.name}
          </h3>
          <p className="text-[14px] bg-burnt-sienna text-lotion rounded-full px-3 py-1">
            ${donut.price}
          </p>
        </div>

        {/* Modal description */}
        <div className="mb-6">
          <p>{donut.modalDescription || donut.description}</p>
        </div>

        {/* Ingredients */}
        <div className="flex items-start gap-3 mb-6">
          <FontAwesomeIcon
            icon={faListUl}
            className="text-burnt-sienna mt-1 flex-shrink-0"
          />
          <div>
            <h4 className="font-bold mb-1">Ingredients</h4>
            <p>{donut.ingredients}</p>
          </div>
        </div>

        {/* Practical info */}
        <div className="flex items-start gap-3">
          <FontAwesomeIcon
            icon={faClipboardCheck}
            className="text-burnt-sienna mt-1 flex-shrink-0"
          />
          <div>
            <h4 className="font-bold mb-1">Details</h4>
            <p>{donut.practicalInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutModal;
