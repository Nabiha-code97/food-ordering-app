import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <div className="h-[600px]">
      <img
        src={hero}
        alt="Homepage image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}