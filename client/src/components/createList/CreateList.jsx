import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateList.scss";
import FormTemplate from "../form/FormTemplate";

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
      complete: false,
    };

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
      <FormTemplate handleSubmit={handleSubmit} handleClick={handleClick} />
    </div>
  );
}

export default CreateList;
