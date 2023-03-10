import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./FormTemplate.scss";

function FormTemplate({
  handleSubmit,
  data,
  handleClick,
  categories,
  setOpen,
}) {
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form">
        <div className="form__top">
          <input
            type="button"
            onClick={() => {
              setOpen(false);
              window.history.replaceState("/home/create", "Title", "/home");
            }}
            className="form__cancel"
            value="Cancel"
          ></input>
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
          <div className="form__tags--container">
            <CategoryButton
              value="work"
              name="work-form"
              handleClick={handleClick}
              classes={`card__filter form__filter`}
              data={data}
              categories={categories}
            />
            <CategoryButton
              value="study"
              name="study-form"
              handleClick={handleClick}
              classes={`card__filter form__filter`}
              data={data}
              categories={categories}
            />
            <CategoryButton
              value="entertainment"
              name="entertainment-form"
              handleClick={handleClick}
              classes={`card__filter form__filter`}
              data={data}
              categories={categories}
            />
            <CategoryButton
              value="family"
              name="family-form"
              handleClick={handleClick}
              classes={`card__filter form__filter`}
              data={data}
              categories={categories}
            />
          </div>
        </div>{" "}
      </div>
    </form>
  );
}

export default FormTemplate;
