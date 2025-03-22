// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
import "@google/model-viewer";
import Button from "../ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 m-50 bg-beige text-peru rounded-bl-2xl rounded-tr-2xl">
      {/* 3D Model */}
      <div className="md:w-6/12 flex justify-center">
        <model-viewer
          src="/donut.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="neutral"
          poster="poster.webp"
          exposure="1"
          auto-rotate
          rotation-per-second="20deg"
          disable-zoom
          className="w-[450px] max-w-sm h-64 md:h-96 block"
        />
      </div>

      {/* 404 */}
      <h1 className="font-beloved-script text-5xl font-bold my-5">404</h1>
      <p className="font-beloved-script text-peru text-sm-h2 md:text-md-h2 lg:text-lg-h2">
        Oops! We can't find that page.
      </p>
      <p className="my-5 max-w-2xl text-sm-p md:text-md-p lg:text-lg-p font-light text-black">
        Sorry about that! Our team is on it, and we'll have it ready soon.
      </p>

      {/* Button */}
      <Button
        text="Return to Home"
        color="burnt-sienna"
        onClick={handleReturnHome}
      />
    </div>
  );
};

export default NotFound;
