import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FormTemplate from "../form/FormTemplate";

function UpdateList({ setOpen }) {
  const [data, setData] = useState();
  const [categories, setCategories] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = (e) => {
    const index = categories.indexOf(e.target.value);

    if (categories.some((item) => item === e.target.value)) {
      categories.splice(index, 1);
    } else {
      categories.push(e.target.value);
    }
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
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/lists/${params.id}`)
      .then((res) => {
        setData(res.data);
        setCategories(res.data.categories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <FormTemplate
        data={data}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        categories={categories}
        setOpen={setOpen}
      />
    </>
  );
}

export default UpdateList;
