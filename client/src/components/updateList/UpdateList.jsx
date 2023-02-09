import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UpdateList.scss";
import FormTemplate from "../form/FormTemplate";

function UpdateList() {
  const [data, setData] = useState();
  const [categories, setCategories] = useState([]);
  const params = useParams();

  console.log(params);

  const handleClick = (e) => {
    data.categories.some((item) => item === e.target.value)
      ? ""
      : categories.push(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedItem = {
      title: e.target.title.value,
      description: e.target.description.value,
      categories: categories,
    };

    axios
      .put(`http://localhost:8080/lists/${params.id}`, updatedItem)
      .then((res) => {
        console.log(res.data.message);
        setCategories([]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/lists/${params.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <>
      <FormTemplate
        data={data}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />
    </>
  );
}

export default UpdateList;
