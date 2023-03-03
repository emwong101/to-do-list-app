import React, { useEffect, useState } from "react";

function CategoryButton({ name, handleClick, classes, categories, value }) {
  const [checked, setChecked] = useState();
  useEffect(() => {
    if (categories) {
      const containsCategory = categories.some((item) => item === value)
        ? true
        : false;
      setChecked(containsCategory);
    }
  }, [categories]);

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
        className={`filter filter__${value}`}
        id={name}
        value={value}
        onClick={handleClick}
      ></button>
      <label name={name} htmlFor={name}>
        {value}
      </label>
    </div>
  );
}

export default CategoryButton;
