import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./FormTemplate.scss";

function FormTemplate({ handleSubmit, data, handleClick, categories }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__top">
        <Link to="/">
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
          classes={`card__filter `}
          data={data}
          categories={categories}
        />
        <CategoryButton
          name="study"
          handleClick={handleClick}
          classes={`card__filter `}
          data={data}
          categories={categories}
        />
        <CategoryButton
          name="entertainment"
          handleClick={handleClick}
          classes={`card__filter `}
          data={data}
          categories={categories}
        />
        <CategoryButton
          name="family"
          handleClick={handleClick}
          classes={`card__filter `}
          data={data}
          categories={categories}
        />
      </div>
    </form>
  );
}

export default FormTemplate;
