import { useNavigate } from "react-router-dom";
import "@google/model-viewer";
import Button from "../ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-5 mt-50 md:mt-35 md:px-8 bg-beige text-peru rounded-bl-2xl rounded-tr-2xl">
      {/* 3D Model */}
      <div className="w-full md:w-8/12 lg:w-6/12 flex justify-center">
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
          className="w-full max-w-sm h-48 sm:h-64 md:h-80 lg:h-96"
        />
      </div>

      {/* 404 */}
      <h1 className="font-beloved-script text-4xl sm:text-5xl md:text-6xl font-bold my-5">
        404
      </h1>
      <p className="font-beloved-script text-peru text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Oops! We can't find that page.
      </p>
      <p className="my-5 max-w-2xl text-sm sm:text-base md:text-lg font-light text-black text-center">
        Sorry about that! Our team is on it, and we'll have it ready soon.
      </p>

      {/* Button */}
      <Button
        text="Return to Home"
        onClick={handleReturnHome}
      />
    </div>
  );
};

export default NotFound;