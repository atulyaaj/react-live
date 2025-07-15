import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(showItems);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/*  Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          {/* Up and Down Arrow Icon */}
          <span>{showItems ? "^" : "⌄"}</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
