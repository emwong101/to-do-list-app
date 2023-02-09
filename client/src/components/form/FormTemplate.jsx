import React, { useState } from "react";

function FormTemplate({ handleSubmit, data, handleClick }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form__top">
        <button className="form__cancel">Cancel</button>
        <input type="submit" className="form__add" value="Add" />
      </div>
      <div className="form__inputs">
        <h3 className="form__title">Title</h3>
        <input
          type="text"
          name="title"
          className="form__title--input"
          defaultValue={data ? data.title : ""}
        />
        <h3 className="form__description">Description</h3>
        <input
          type="text"
          className="form__description--input"
          name="description"
          defaultValue={data ? data.description : ""}
        />
      </div>
      <div className="form__tags">
        {data ? (
          <>
            <input
              type="checkbox"
              className="form__tag"
              value="work"
              name="work"
              onClick={handleClick}
              defaultChecked={data.categories.some((item) => item === "work")}
            />
            <span className="form__category--label">Work</span>

            <input
              type="checkbox"
              className="form__tag"
              value="study"
              name="study"
              onClick={handleClick}
              defaultChecked={data.categories.some((item) => item === "study")}
            />
            <span className="form__category--label">Study</span>

            <input
              type="checkbox"
              className="form__tag"
              value="entertainment"
              name="entertainment"
              onClick={handleClick}
              defaultChecked={data.categories.some(
                (item) => item === "entertainment"
              )}
            />
            <span className="form__category--label">Entertainment</span>

            <input
              type="checkbox"
              className="form__tag"
              value="family"
              name="family"
              onClick={handleClick}
              defaultChecked={data.categories.some((item) => item === "family")}
            />
            <span className="form__category--label">Family</span>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              className="form__tag"
              value="work"
              name="work"
              onClick={handleClick}
            />
            <span className="form__category--label">Work</span>

            <input
              type="checkbox"
              className="form__tag"
              value="study"
              name="study"
              onClick={handleClick}
            />
            <span className="form__category--label">Study</span>

            <input
              type="checkbox"
              className="form__tag"
              value="entertainment"
              name="entertainment"
              onClick={handleClick}
            />
            <span className="form__category--label">Entertainment</span>

            <input
              type="checkbox"
              className="form__tag"
              value="family"
              name="family"
              onClick={handleClick}
            />
            <span className="form__category--label">Family</span>
          </>
        )}
      </div>
    </form>
  );
}

export default FormTemplate;
