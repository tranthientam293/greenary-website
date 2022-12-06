import Banner from "../components/partials/Banner";
import ProductNavTab from "../components/partials/ProductNavTab";
import Products from "../components/partials/Products";
import Shipping from "../components/partials/Shipping";


const HomeView = () => {
  
  return (
    <>
      <Banner />
      <ProductNavTab title={"Shop by Categories"} />
      <Products title={"Popular Products"} maxGrid={"grid-cols-4"}/>
      <Shipping />
    </>
  );
};

export default HomeView;
