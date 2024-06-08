"use client";
import { useRouter } from "next/navigation";
// @ts-ignore
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
interface MenuItem {
  name: string;
  link: string;
}
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuItems: MenuItem[] = [
    {
      name: "Contact",
      link: "/Contact",
    },
    {
      name: "Pricing",
      link: "#",
    },
    {
      name: "Documentation",
      link: "#",
    },
    {
      name: "Join our community",
      link: "#",
    },
  ];

  const router = useRouter();
  const handleRoute = (route: string) => {
    router.push(route);
    setMenu(false);
  };

  return (
    <div className="w-full px-4 py-6 h-full relative">
      <div className="flex justify-between items-center">
        <h1
          className="text-xl font-medium cursor-pointer"
          onClick={() => handleRoute("/")}
        >
          Toingg
        </h1>
        <span
          onClick={() => setMenu(!menu)}
          className="text-[#FFA96B] text-2xl"
        >
          {!menu ? <IoMenu /> : <IoClose />}
        </span>
      </div>
      <div
        className={` z-50 p-4  w-full
          duration-300 ease-in-out transform absolute top-12 left-0
          ${menu ? "translate-y-0" : "-translate-y-[200%]"}`}
      >
        <div
          className="flex flex-col items-center rounded-2xl h-[80vh]
          bg-gradient-to-b to-[#D38751] from-[#FEECDF]
          gap-10 py-6 px-8"
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center w-full font-medium"
              onClick={() => handleRoute(item.link)}
            >
              <p>{item.name}</p>
              <span>{"--->"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
