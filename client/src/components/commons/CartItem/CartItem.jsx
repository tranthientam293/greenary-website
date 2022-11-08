import { useShoppingCartContext } from "../../../context/ShoppingContext";
import { ChevronDown, ChevronUp, TrashBin } from "../Icons/Icons";
import formatCurrency from "../../../ultilities/formatCurrency";

const CartItem = (props) => {
  const { _id, quantity, imageUrl, title, price, promotion, category } =
    props.item;

  const { increaseProductQuantity, decreaseProductQuantity, removeFromCart } =
    useShoppingCartContext();

  return (
    <div className="flex justify-between items-center px-5 py-6 border-dashed border-b-gray-01 border-b-[1px]">
      <div className="basis-2/6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <img
          src={imageUrl}
          alt=""
          className="max-w-[100px] aspect-[1] rounded border-[1px] border-gray-01"
        />

        <div>
          <h4>{title}</h4>
          <p className="para-1">
            Category: <span>{category}</span>
          </p>
          <p className="para-1">Weight: 1kg</p>
        </div>
      </div>

      <div className="basis-1/6 text-black-01 text-center">
        {formatCurrency(price * (1 - promotion))}
      </div>

      <div className="basis-1/6 flex justify-center items-center gap-3 border-[1px] border-gray-01 rounded py-3">
        <span className="font-Quicksand font-bold text-green-01 text-lg p-0 ">
          {quantity}
        </span>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => {
              increaseProductQuantity(props.item);
            }}
          >
            <ChevronUp />
          </button>
          <button
            onClick={() => {
              console.log("click");
              decreaseProductQuantity(_id);
            }}
          >
            <ChevronDown />
          </button>
        </div>
      </div>

      <div className="basis-1/6 text-black-01 text-center">
        {formatCurrency(price * (1 - promotion) * quantity)}
      </div>

      <div className=" text-center">
        <button onClick={() => removeFromCart(_id)}>
          <TrashBin />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
