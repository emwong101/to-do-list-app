import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DisplayList.scss";
import ItemCard from "../itemCard/ItemCard";

function DisplayList() {
  const [listItems, setListItems] = useState([]);
  const [optionMenu, setOptionMenu] = useState();
  const [filter, setFilter] = useState("");

  /* 
logic for category filters:
      >filter through all list items
      >parse through category array
      >return items containing filtered category 
  */
  const filtered = listItems.filter((item) =>
    item.categories.some((category) => category === filter)
  );

  //set filter keyword on click
  const handleClick = (e) => {
    filter !== e.target.value ? setFilter(e.target.value) : setFilter("");
  };

  //delete list item from DB
  const handleDelete = (e) => {
    axios.delete(`http://localhost:8080/lists/${e.target.name}`);
    setListItems((data) => {
      return data.filter((item) => item._id !== e.target.name);
    });
  };

  //fetch and set data from DB on render
  useEffect(() => {
    axios
      .get("http://localhost:8080/lists")
      .then((res) => {
        setListItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card">
      <div className="card__filters" onClick={handleClick}>
        <input type="button" value="work" />
        <input type="button" value="study" />
        <input type="button" value="entertainment" />
        <input type="button" value="family" />
      </div>
      <ul className="card__list">
        {
          //check if listItems contains items
          listItems.length > 0 ? (
            //check if filter has been set, return all results if not set
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
          )
        }
      </ul>
    </div>
  );
}

export default DisplayList;
