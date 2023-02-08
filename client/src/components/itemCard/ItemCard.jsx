import React, { useState } from "react";
import "./ItemCard.scss";

function ItemCard({ data, handleDelete, optionMenu, setOptionMenu }) {
  const { _id, title, description, categories } = data;
  const [checked, setChecked] = useState(false);

  const openMenu = (e) => {
    if (optionMenu !== e.target.id) {
      setOptionMenu(e.target.id);
    } else {
      setOptionMenu("");
    }
  };

  const handleCheck = (e) => {
    checked === false ? setChecked(true) : setChecked(false);
  };

  return (
    <li>
      <div className="item">
        <div className={`item__heading ${checked ? "done" : ""}`}>
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
        <p className={`${checked ? "done" : ""}`}>{description}</p>
        <div className="item__bottom">
          <p>{categories.join()}</p>
          <div className="item__checkbox">
            <label htmlFor="done">done</label>
            <input
              type="checkbox"
              name="done"
              className="item__done"
              onClick={handleCheck}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
