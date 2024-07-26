import { useState } from "react";
import ItemList from "./Itemlist";

const ResCategory = ({ data, showItems, setItem, dummy }) => {
  const [showCat, setShowCat] = useState(false);
  const handleChange = () => {
    showCat === false ? setShowCat(true) : setShowCat(false);

    setItem();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4  bg-slate-100  rounded-lg shadow-lg">
        {/* Accordian Header */}

        <div
          className="flex justify-between cursor-pointer"
          onClick={handleChange}
        >
          <span className="font-bold">
            {data.title}({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordian Body */}
        <div className="p-2">
          {showItems && showCat && (
            <ItemList items={data?.itemCards} dummy={dummy} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ResCategory;
