import React, { useEffect, useState } from "react";

const FixedListItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listItem, setListItem] = useState(item);

  useEffect(() => {
    setListItem(item);
  }, [item]);

  return (
    <div className="flex justify-between border border-black rounded my-1  bg-indigo-100">
      <p className=" m-1 px-8 rounded">{item.toUpperCase()}</p>
    </div>
  );
};
export default FixedListItem;
