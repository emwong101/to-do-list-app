import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateList.scss";
import FormTemplate from "../form/FormTemplate";

function CreateList({ setOpen }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState();

  const animation = {
    hidden: { opacity: 0, x: "100vw" },
    visible: { opacity: 1, x: 0, transition: { ease: "linear", delay: 0.25 } },
    exit: { opacity: 1, x: "-100vw", transition: { ease: "easeInOut" } },
  };

  function handleClick(e) {
    const index = categories.indexOf(e.target.value);
    categories.includes(e.target.value)
      ? categories.splice(index, 1)
      : categories.push(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      title: e.target.title.value,
      description: e.target.description.value,
      categories: categories,
      complete: false,
    };

    axios
      .post("http://localhost:8080/lists", newItem)
      .then((res) => {
        setCategories([]);
        console.log(res.data.message);
        navigate("/home");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <FormTemplate
      categories={categories}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      setOpen={setOpen}
    />
  );
}

export default CreateList;
