import React, { useEffect, useState } from "react";

function CategoryButton({ name, handleClick, classes, categories }) {
  const [checked, setChecked] = useState();
  useEffect(() => {
    if (categories) {
      const containsCategory = categories.some((item) => item === name)
        ? true
        : false;
      setChecked(containsCategory);
    }
  });

  const removeActive = () => {
    if (categories) {
      checked ? setChecked(false) : setChecked(true);
    } else {
      setChecked(false);
    }
  };
  return (
    <div
      className={`${classes} ${checked ? "active" : ""}`}
      onClick={removeActive}
    >
      <button
        type="button"
        className={`filter filter__${name}`}
        id={name}
        value={name}
        onClick={handleClick}
      ></button>
      <label name={name} htmlFor={name}>
        {name}
      </label>
    </div>
  );
}

export default CategoryButton;
