import NavIcon from "./NavIcon";
import { useEffect, useState } from "react";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
        {isOpen ? (
          <i class="fa-solid fa-x"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}{" "}
      </button>
      <div
        className={
          "bg-primary flex flex-col py-12 px-6 w-full h-auto absolute -z-10 left-0 transition-all duration-300 ease-in-out md:flex-row md:static md:w-auto md:h-auto md:p-0 md:translate-y-0 md:transition-none md:bg-transparent" +
          (isOpen ? " top-full" : " -top-[1000%]")
        }
      >
        <ul className="flex flex-col gap-12 text-2xl md:flex-row md:text-[20px]">
          <a href="#">
            {" "}
            <li>Inicio</li>
          </a>
          <a href="#">
            {" "}
            <li>Productos</li>
          </a>
          <a href="#">
            {" "}
            <li>Comunidad</li>
          </a>
          <div className="md:hidden">
            <NavIcon />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
