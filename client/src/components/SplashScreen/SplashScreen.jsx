import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./SplashScreen.scss";

function SplashScreen() {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => navigate("/landing"), 2500);
  }, []);

  return (
    <>
      {isMounted ? (
        <div className="background">
          <motion.div
            className="main"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
            exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
          >
            <span className="strike">
              <h1 className="title">todo</h1>
            </span>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default SplashScreen;
