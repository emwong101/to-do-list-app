import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DisplayList.scss";
import { Link } from "react-router-dom";
import ItemCard from "../itemCard/ItemCard";

function DisplayList() {
  const [listItems, setListItems] = useState([]);
  const [optionMenu, setOptionMenu] = useState();
  //   const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");

  const handleClick = (e) => {
    filter !== e.target.value ? setFilter(e.target.value) : setFilter("");
  };

  const handleDelete = (e) => {
    axios.delete(`http://localhost:8080/lists/${e.target.name}`);
    setListItems((data) => {
      return data.filter((item) => item._id !== e.target.name);
    });
  };

  const filtered = listItems.filter((item) =>
    item.categories.some((category) => category === filter)
  );

  console.log(filtered);

  useEffect(() => {
    axios
      .get("http://localhost:8080/lists")
      .then((res) => {
        // console.log(res.data);
        setListItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   console.log(listItems);

  return (
    <div>
      <div className="card__filters" onClick={handleClick}>
        <input type="button" value="work" />
        <input type="button" value="study" />
        <input type="button" value="entertainment" />
        <input type="button" value="family" />
      </div>
      <ul className="card__list">
        {listItems.length > 0 ? (
          filter === "" ? (
            listItems.map((data) => (
              <ItemCard
                data={data}
                key={data._id}
                handleDelete={handleDelete}
                optionMenu={optionMenu}
                setOptionMenu={setOptionMenu}
              />
            ))
          ) : (
            filtered.map((data) => (
              <ItemCard
                data={data}
                key={data._id}
                handleDelete={handleDelete}
                optionMenu={optionMenu}
                setOptionMenu={setOptionMenu}
              />
            ))
          )
        ) : (
          <p>Nothing left to do!</p>
        )}
      </ul>
    </div>
  );
}

export default DisplayList;

/* filter functionality
> update schema with new "categories" row which stores array
> create buttons for categories on create new item page
> for displaying filtered results, loop through categories array and return items with matching category name
> filter/search params will be stored in a state */
