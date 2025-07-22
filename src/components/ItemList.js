import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //   console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <div className="py-2 flex flex-col">
                <span className="text-gray-700 font-bold">
                  {item.card.info.name}
                </span>
                <span className="text-sm">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="relative mb-6">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-39 h-36 object-cover rounded-xl"
              />
              <button
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-semibold text-lg px-10 py-1 rounded-lg shadow-md cursor-pointer border border-gray-300 hover:bg-gray-200"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
