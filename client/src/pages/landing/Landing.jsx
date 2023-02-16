import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/itemCard/ItemCard";
import { motion } from "framer-motion";
import "./Landing.scss";

function Landing() {
  const data = {
    title: "Kickstart your productivity",
    description: "Create and complete tasks",
    categories: ["entertainment", "work"],
    complete: false,
    _id: 0,
  };
  return (
    <motion.div
      className="landing"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ ease: "linear", delay: 0.25 }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <section className="landing__body">
        <h1 className="landing__title">
          <span className="landing__title--1">t</span>
          <span className="landing__title--2">o</span>
          <span className="landing__title--3">d</span>
          <span className="landing__title--4">o</span>
        </h1>

        <p className="landing__text">
          An elevated version of a classic to-do app based on{" "}
          <a
            className="landing__link"
            href="https://www.behance.net/gallery/107935847/Todo-List-Desktop-Mobile-app-UI-Design?tracking_source=search_projects%7CTodo+list"
          >
            designs
          </a>{" "}
          by Nada Ishtewi.
        </p>
        <Link to="/home">
          <button className="landing__start">Get Started</button>
        </Link>
      </section>
      <section className="landing__graphics">
        <div className="landing__illustrations">
          <img
            className="landing__illustration"
            src="/assets/todo__illustration1.png"
            alt="illustration of lady"
          />
          <img
            className="landing__illustration"
            src="/assets/todo__illustration3.png"
            alt="illustration of girl"
          />
          <img
            className="landing__illustration"
            src="/assets/todo__illustration2.png"
            alt="illustration of man"
          />
        </div>
        <div className="landing__item">
          <ItemCard data={data} key={data._id} />
        </div>
      </section>
    </motion.div>
  );
}

export default Landing;
