import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateList.scss";

function CreateList() {
  const navigate = useNavigate();
  const [data, setData] = useState({ title: "", description: "" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      title: data.title,
      description: data.description,
    };

    axios
      .post("http://localhost:8080/lists", data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div>
      <form className="form__container" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default CreateList;
