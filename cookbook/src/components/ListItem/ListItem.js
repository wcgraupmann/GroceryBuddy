import React, { useEffect, useState } from "react";

const ListItem = ({ item, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listItem, setListItem] = useState(item);

  useEffect(() => {
    setListItem(item);
  }, [item]);

  const onDeleteClick = () => {
    onDelete(item);
  };

  const confirmEdit = () => {
    onEdit(listItem, item);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setListItem(item);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="flex justify-between border border-black rounded my-1 pl-8  bg-indigo-100">
        <p className=" m-1 px-8 rounded">{item.toUpperCase()}</p>
        <div className="py-1 pr-1">
          <button
            className="border border-black rounded bg-yellow-100 mr-1 px-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="border border-black rounded bg-red-100 px-2"
            onClick={onDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between border border-black rounded my-1 pl-8  bg-indigo-100">
        <div className="flex flew-row">
          <input
            value={listItem}
            id="listItem"
            name="listItem"
            type="text"
            required
            onChange={(e) => setListItem(e.target.value)}
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="py-1 pr-1">
          <button
            className="border border-black rounded bg-green-100 mr-1 px-2"
            onClick={confirmEdit}
          >
            Confirm Edit
          </button>

          <button
            className="border border-black rounded bg-red-100 px-2"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
};
export default ListItem;
