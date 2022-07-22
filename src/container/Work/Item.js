import React from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub,AiFillHome } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }) {
  const { image, title,description,functions,methods,projectLink,codeLink } = items.find(item => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
         <a href={projectLink}></a>
         <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay2"
      >
      <a href={projectLink}><AiFillEye style={{width:'40px',height:'40px',color: 'var(--secondary-color)'}}/></a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay3"
      >
      <a href={codeLink}><AiFillGithub style={{width:'40px',height:'40px',color: 'var(--secondary-color)'}}/></a>
      </motion.div>
        <Link to="/"/>
      </motion.div>
     
      
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img  src={image} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2 style={{fontSize:'20px'}} >{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <div style={{width:'95%',textAlign:'start',zIndex:'99'}}>
                <h2>Description:</h2>
          <p>{description}</p>
                <h2>Functions:</h2>
          <p >{functions}</p>
                <h2>Methods:</h2>
          <p>{methods}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
