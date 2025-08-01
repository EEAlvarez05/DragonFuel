import { useState } from "react";
import CardFlavors from "./CardFlavors";
function Flavors() {
  const [offset, setOffset] = useState(0);
  const minOffset = -200;
  const maxOffset = 0;

  const handleLeft = () => {
    setOffset(Math.min(offset + 100, maxOffset));
  }

  const handleRight = () => {
    setOffset(Math.max(offset - 100, minOffset));
  }
  return (
    <section className="flex flex-col justify-center items-center text-center gap-12 md:gap-14 lg:gap-16 py-10" id="products">
      <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
        <h2 className="text-3xl">Nuestros Sabores</h2>
        <p className="text-balance text-[20px]">
          Explorá la energía de DragonFuel en todas sus versiones. <br />
          Elegí tu favorito y empezá a rugir.
        </p>
      </div>
      <div className="relative flex flex-col gap-5 w-full overflow-x-hidden">
          <button onClick={handleLeft} className={"button-carousel left-10" + (offset === maxOffset ? " opacity-50" : " opacity-100")}><i class="fa-solid fa-angle-left"></i></button>
          <button onClick={handleRight} className={"button-carousel right-10" + (offset === minOffset ? " opacity-50" : " opacity-100")}><i class="fa-solid fa-angle-right"></i></button>
        <div className="flex md:justify-center md:items-center md:overflow-x-auto md:gap-8 lg:gap-12" style={{
          transform: `translateX(${offset}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}>
          <CardFlavors name={"Original"}/>
          <CardFlavors name={"Frutal"}/>
          <CardFlavors name={"IceFire Citrus"}/>
        </div>
      </div>
      <button className="button2 py-2 px-4 rounded-3xl cursor-pointer font-semibold">
        Ver todos los productos
      </button>
    </section>
  );
}

export default Flavors;
