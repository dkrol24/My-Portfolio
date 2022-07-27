import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from "framer-motion";
import './Styles.scss'
function Card({ id, title, theme, image,tags }) {
  return (
    <div className={`card ${theme}`}>
     
      <div className="card-content-container">
        <motion.div  className="card-content" layoutId={`card-container-${id}`}>

          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div>

          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img  src={image} alt="" />
          </motion.div>
            <p>{tags}</p>

        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </div>
  );
}

 function Work({ selectedId }) {
  return (
    <div className="card-list">
        <h2 style={{width:'100%'}} className="head-text">My <span>Projects</span> Section</h2>
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </div>
  );
}
export default AppWrap(
  MotionWrap(Work),
  'work',
  'app__whitebg',
);
