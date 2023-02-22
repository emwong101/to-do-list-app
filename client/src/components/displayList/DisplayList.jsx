import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import "./DisplayList.scss";
import ItemCard from "../itemCard/ItemCard";
import CategoryButton from "../CategoryButton/CategoryButton";
import TopNav from "../topNav/TopNav";

function DisplayList() {
  const [listItems, setListItems] = useState([]);
  const [optionMenu, setOptionMenu] = useState();
  const [filter, setFilter] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const animation =
    windowSize > 768
      ? {}
      : {
          initial: { x: "100vw" },
          animate: { x: 0 },
          transition: { ease: "linear", delay: 0.25 },
          exit: { x: "-100vw", transition: { ease: "easeInOut" } },
        };

  /* 
logic for category filters:
      >filter through all list items
      >parse through category array
      >return items containing filtered category 
  */
  const filtered = listItems.filter((item) =>
    item.categories.some((category) => category === filter)
  );

  //set filter keyword on click
  const handleClick = (e) => {
    filter !== e.target.value ? setFilter(e.target.value) : setFilter("");
  };

  //delete list item from DB
  const handleDelete = (e) => {
    axios.delete(`http://localhost:8080/lists/${optionMenu}`);
    setListItems((data) => {
      return data.filter((item) => item._id !== optionMenu);
    });
  };

  //fetch and set data from DB on render
  useEffect(() => {
    axios
      .get("http://localhost:8080/lists")
      .then((res) => {
        setListItems(res.data);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ ease: "linear", delay: 0.25 }}
        exit={{ x: "-100vw", transition: { ease: "linear" } }}
      >
        <TopNav windowSize={windowSize} />
        <section className="card">
          <div className="card__filters">
            <CategoryButton
              filter={filter}
              name="work"
              handleClick={handleClick}
              classes={`card__filter ${filter === "work" ? "active" : ""}`}
            />
            <CategoryButton
              filter={filter}
              name="study"
              handleClick={handleClick}
              classes={`card__filter ${filter === "study" ? "active" : ""}`}
            />
            <CategoryButton
              filter={filter}
              name="entertainment"
              handleClick={handleClick}
              classes={`card__filter ${
                filter === "entertainment" ? "active" : ""
              }`}
            />
            <CategoryButton
              filter={filter}
              name="family"
              handleClick={handleClick}
              classes={`card__filter ${filter === "family" ? "active" : ""}`}
            />
          </div>
          <ul className="card__list">
            {
              //check if listItems contains items
              listItems.length > 0 ? (
                //check if filter has been set, return all results if not set
                filter === "" ? (
                  listItems.map((data) => (
                    <ItemCard
                      data={data}
                      key={data._id}
                      handleDelete={handleDelete}
                      optionMenu={optionMenu}
                      setOptionMenu={setOptionMenu}
                    />
                  ))
                ) : (
                  filtered.map((data) => (
                    <ItemCard
                      data={data}
                      key={data._id}
                      handleDelete={handleDelete}
                      optionMenu={optionMenu}
                      setOptionMenu={setOptionMenu}
                    />
                  ))
                )
              ) : (
                <p>Nothing left to do!</p>
              )
            }
          </ul>
        </section>
        <Outlet />
      </motion.div>
    </>
  );
}

export default DisplayList;
