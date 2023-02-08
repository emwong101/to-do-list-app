import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateList.scss";

function CreateList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  function handleClick(e) {
    data.push(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      title: e.target.title.value,
      description: e.target.description.value,
      categories: data,
    };
    console.log(newItem);

    axios
      .post("http://localhost:8080/lists", newItem)
      .then((res) => {
        setData([]);
        console.log(res.data.message);
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div>
      <form className="form__container" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title"></input>
        <label htmlFor="description">Description</label>
        <input type="text" name="description"></input>
        <div className="category__div">
          <label htmlFor="">
            <input
              type="checkbox"
              name="categories"
              value="work"
              onClick={handleClick}
            />
            <span>work</span>
          </label>
        </div>
        <div className="category__div">
          <label htmlFor="">
            <input
              type="checkbox"
              name="categories"
              value="study"
              onClick={handleClick}
            />
            <span>study</span>
          </label>
        </div>
        <div className="category__div">
          <label htmlFor="">
            <input
              type="checkbox"
              name="categories"
              value="entertainment"
              onClick={handleClick}
            />
            <span>entertainment</span>
          </label>
        </div>
        <div className="category__div">
          <label htmlFor="">
            <input
              type="checkbox"
              name="categories"
              value="family"
              onClick={handleClick}
            />
            <span>family</span>
          </label>
        </div>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default CreateList;
