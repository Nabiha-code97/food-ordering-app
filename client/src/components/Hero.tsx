import { useState } from "react";
import hero from "../assets/hero.jpg";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[600px]">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      <img
        src={hero}
        alt="Homepage image"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}