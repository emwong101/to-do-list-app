import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiMoreHorizontal } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import "./ItemCard.scss";

function ItemCard({ data, handleDelete, optionMenu, setOptionMenu }) {
  const { _id, title, description, categories, complete } = data;
  const navigate = useNavigate();
  const [checked, setChecked] = useState(complete);
  const [mounted, setMounted] = useState(false);
  const [item, setItem] = useState();
  const open = Boolean(item);

  const handleCheck = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const openMenu = (e) => {
    if (optionMenu !== e.target.id) {
      setOptionMenu(e.target.id);
    }
    setItem(e.currentTarget);
    // setOptionMenu(item);
  };

  const closeMenu = () => {
    setItem(null);
  };

  const navigateTo = (e) => {
    navigate(`/update/${optionMenu}`);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      axios
        .put(`http://localhost:8080/lists/${_id}`, {
          complete: checked,
        })
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [checked]);

  return (
    <li>
      <StyledEngineProvider injectFirst>
        <div className="item">
          <div className={`item__heading ${checked ? "done" : ""}`}>
            <h2 className="item__title">{title}</h2>
            <div className="item__menu">
              <IconButton
                className="item__menu--button"
                onClick={openMenu}
                aria-controls={open ? "dropdown-menu" : undefined}
                id={_id}
              >
                <FiMoreHorizontal className="icon" id={_id} />
              </IconButton>
              <Menu
                id="dropdown-menu"
                anchorEl={item}
                open={open}
                onClose={closeMenu}
                className="menu"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem
                  className="item__menu--link link__top"
                  onClick={navigateTo}
                >
                  Edit ...
                </MenuItem>

                <MenuItem className="item__menu--link" onClick={handleDelete}>
                  Delete
                </MenuItem>
              </Menu>
            </div>
          </div>
          <p className={`item__body ${checked ? "done" : ""}`}>{description}</p>
          <div className="item__bottom">
            <div className="item__categories">
              {categories
                ? categories.map((category) => (
                    <div
                      className={`category category__${category}`}
                      key={category}
                    ></div>
                  ))
                : ""}
            </div>
            <div className="item__checkbox">
              <label className="item__checkbox--container">
                done
                <input
                  type="checkbox"
                  name="done"
                  className="item__done"
                  onClick={handleCheck}
                  defaultChecked={complete}
                />
                <span className="item__checkbox--custom"></span>
              </label>
            </div>
          </div>
        </div>
      </StyledEngineProvider>
    </li>
  );
}
export default ItemCard;
