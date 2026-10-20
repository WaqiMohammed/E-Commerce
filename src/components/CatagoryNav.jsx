import {
  House,
  Motorbike,
  Smartphone,
  LaptopMinimal,
  WashingMachine,
  Mars,
  Venus,
  PlantPot,
  CookingPot,
} from "lucide-react";
import { useState } from "react";

const CatagoryNav = () => {
  const [selectedCat, setSelectedCat] = useState("Home");
  const categoryLS = [
    {
      key: 0,
      cat: "Home",
      icon: <House size={22} strokeWidth={1} nonScalingStroke />,
    },
    {
      key: 1,
      cat: "Smartphones",
      icon: <Smartphone size={22} strokeWidth={1.25} />,
    },
    {
      key: 2,
      cat: "Laptop",
      icon: <LaptopMinimal size={22} strokeWidth={1} />,
    },
    {
      key: 3,
      cat: "Electronics",
      icon: <WashingMachine size={22} strokeWidth={1} />,
    },
    {
      key: 4,
      cat: "Mens Fashion",
      icon: <Mars size={22} strokeWidth={1} />,
    },
    {
      key: 5,
      cat: "Womens Fashion",
      icon: <Venus size={22} strokeWidth={1} />,
    },
    {
      key: 6,
      cat: "Home Decoration",
      icon: <PlantPot size={22} strokeWidth={1} />,
    },
    {
      key: 7,
      cat: "Kitchen Accessories",
      icon: <CookingPot size={22} strokeWidth={1} />,
    },
    {
      key: 8,
      cat: "Vehicles",
      icon: <Motorbike size={22} strokeWidth={1} />,
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center gap-10 h-22 font-Arapey">
        {categoryLS.map((category) => (
          <button
            key={category.key}
            onClick={() => setSelectedCat(category.cat)}
            className={`flex flex-col items-center rounded p-3 cursor-pointer ${
              selectedCat === category.cat
                ? "bg-digital-blue-700 text-white shadow-md"
                : "bg-transparent text-ink-black-900 hover:bg-ink-black-50"
            }`}
          >
            {category.icon}
            {category.cat}
          </button>
        ))}
      </div>
      <div>SELECTED : {selectedCat}</div>
    </div>
  );
};

export default CatagoryNav;
