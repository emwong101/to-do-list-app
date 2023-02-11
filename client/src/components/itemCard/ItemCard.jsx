import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiMoreHorizontal } from "react-icons/fi";
import "./ItemCard.scss";

function ItemCard({ data, handleDelete, optionMenu, setOptionMenu }) {
  const { _id, title, description, categories, complete } = data;
  const [checked, setChecked] = useState(complete);
  const [mounted, setMounted] = useState(false);

  const handleCheck = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const openMenu = (e) => {
    if (optionMenu !== e.target.id) {
      setOptionMenu(e.target.id);
    } else {
      setOptionMenu("");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      axios
        .put(`http://localhost:8080/lists/${_id}`, {
          complete: checked,
        })
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [checked]);

  return (
    <li>
      <div className="item">
        <div className={`item__heading ${checked ? "done" : ""}`}>
          <h2 className="item__title">{title}</h2>
          <div className="item__menu">
            <FiMoreHorizontal className="icon" id={_id} onClick={openMenu} />

            {optionMenu === _id ? (
              <div className="item__dropdown">
                <Link to={`/update/${_id}`}>
                  <button name={_id} className="dropdown__link">
                    Edit ...
                  </button>
                </Link>
                <hr />
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
        <p className={`item__body ${checked ? "done" : ""}`}>{description}</p>
        <div className="item__bottom">
          <div className="item__categories">
            {categories
              ? categories.map((category) => (
                  <div
                    className={`category category__${category}`}
                    key={category}
                  ></div>
                ))
              : ""}
          </div>
          <div className="item__checkbox">
            <label className="item__checkbox--container">
              done
              <input
                type="checkbox"
                name="done"
                className="item__done"
                onClick={handleCheck}
                defaultChecked={complete}
              />
              <span className="item__checkbox--custom"></span>
            </label>
          </div>
        </div>
      </div>
    </li>
  );
}
export default ItemCard;
