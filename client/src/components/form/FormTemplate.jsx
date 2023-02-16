import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./FormTemplate.scss";

function FormTemplate({ handleSubmit, data, handleClick, categories }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      {" "}
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ ease: "linear", delay: 0.25 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <div className="form__top">
          <Link to="/home">
            <button className="form__cancel">Cancel</button>
          </Link>
          <input type="submit" className="form__add" value="Add" />
        </div>
        <div className="form__inputs">
          <label className="form__heading">Title</label>
          <input
            type="text"
            name="title"
            className="form__input"
            defaultValue={data ? data.title : ""}
            placeholder="add a title ..."
          />
          <label className="form__heading">Description</label>
          <textarea
            className="form__input form__input--large"
            name="description"
            placeholder="add a description ..."
            defaultValue={data ? data.description : ""}
          />
        </div>
        <div className="form__tags">
          <label className="form__heading">Tags</label>
          <CategoryButton
            name="work"
            handleClick={handleClick}
            classes={`card__filter form__filter`}
            data={data}
            categories={categories}
          />
          <CategoryButton
            name="study"
            handleClick={handleClick}
            classes={`card__filter form__filter`}
            data={data}
            categories={categories}
          />
          <CategoryButton
            name="entertainment"
            handleClick={handleClick}
            classes={`card__filter form__filter`}
            data={data}
            categories={categories}
          />
          <CategoryButton
            name="family"
            handleClick={handleClick}
            classes={`card__filter form__filter`}
            data={data}
            categories={categories}
          />
        </div>{" "}
      </motion.div>
    </form>
  );
}

export default FormTemplate;
