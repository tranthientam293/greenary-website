import product01 from "./img/product-01.png";
import product02 from "./img/product-02.png";
import product03 from "./img/product-03.png";
import product04 from "./img/product-04.png";
import product05 from "./img/product-05.png";
import product06 from "./img/product-06.png";
import product07 from "./img/product-07.png";
import product08 from "./img/product-08.png";

const productContainer = () => {
  return [
    {
      image: product01,
      name: "Garbuz Ukraine",
      status: "sale",
      isFavorite: false,
      rating: 4,
    },
    {
      image: product02,
      name: "Ground allspice",
      status: "new",
      isFavorite: true,
      rating: 4,
    },
    {
      image: product03,
      name: "Wash the carrot",
      status: "",
      isFavorite: false,
      rating: 2,
    },
    {
      image: product04,
      name: "Boston",
      status: "hot",
      isFavorite: false,
      rating: 4,
    },
    {
      image: product05,
      name: "Petya Zhovta",
      status: "",
      isFavorite: false,
      rating: 4,
    },
    {
      image: product06,
      name: "Boby Edamame c/m",
      status: "hot",
      isFavorite: false,
      rating: 5,
    },
    {
      image: product07,
      name: "Kiwi Gold",
      status: "sale",
      isFavorite: false,
      rating: 4,
    },
    {
      image: product08,
      name: "Mushroom Shiitake",
      status: "new",
      isFavorite: false,
      rating: 3,
    },
  ];
};

export default productContainer;
