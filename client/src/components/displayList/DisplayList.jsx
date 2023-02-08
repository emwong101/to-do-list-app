import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DisplayList.scss";
import { Link } from "react-router-dom";

function ToDoItem({ data, handleDelete }) {
  const { _id, title, description } = data;

  return (
    <li>
      <div className="item">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="item__buttons--container">
        <button name={_id} className="edit">
          Edit
        </button>
        <button onClick={handleDelete} name={_id} className="delete">
          Delete
        </button>
      </div>
    </li>
  );
}

function DisplayList() {
  const [listItems, setListItems] = useState();

  const handleDelete = (e) => {
    axios.delete(`http://localhost:8080/lists/${e.target.name}`);
    setListItems((data) => {
      return data.filter((item) => item._id !== e.target.name);
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/lists")
      .then((res) => {
        console.log(res.data);
        setListItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>To-Do</h1>
      <Link to="/create">
        <button>+</button>
      </Link>
      <ul>
        {listItems
          ? listItems.map((data) => (
              <ToDoItem
                data={data}
                key={data._id}
                handleDelete={handleDelete}
              />
            ))
          : ""}
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
