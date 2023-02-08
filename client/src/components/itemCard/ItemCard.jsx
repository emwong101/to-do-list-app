import React from "react";
import "./ItemCard.scss";

function ItemCard({ data, handleDelete, optionMenu, setOptionMenu }) {
  const { _id, title, description, categories } = data;

  const openMenu = (e) => {
    if (optionMenu !== e.target.id) {
      setOptionMenu(e.target.id);
    } else {
      setOptionMenu("");
    }
  };

  return (
    <li>
      <div className="item">
        <div className="item__heading">
          <h2 className="item__title">{title}</h2>
          <div className="item__menu">
            <button id={_id} onClick={openMenu} className="item__options">
              ...
            </button>

            {optionMenu === _id ? (
              <div className="item__dropdown">
                <button name={_id} className="dropdown__link">
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  name={_id}
                  className="dropdown__link"
                >
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <p>{description}</p>
        <p>{categories.join()}</p>
      </div>
    </li>
  );
}

export default ItemCard;
