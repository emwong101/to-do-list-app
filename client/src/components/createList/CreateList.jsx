import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateList.scss";
import FormTemplate from "../form/FormTemplate";

function CreateList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState();

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
    <div>
      <FormTemplate
        categories={categories}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />
    </div>
  );
}

export default CreateList;
