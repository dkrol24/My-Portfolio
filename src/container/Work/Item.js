import React from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }) {
  const { image,image2,description,functions,methods,projectLink,codeLink,codeLink2,projectLink2 } = items.find(item => item.id === id);

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
         <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay2"
      >
      <a target="_blank" href={projectLink}><AiFillEye style={{width:'40px',height:'40px',color: 'var(--secondary-color)'}}/></a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay3"
      >
      <a target="_blank" href={codeLink}><AiFillGithub style={{width:'40px',height:'40px',color: 'var(--secondary-color)'}}/></a>
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
          <motion.div className="content-container" animate>
            <div style={{width:'95%',height:'100%',textAlign:'start',zIndex:'99',display:'flex',justifyContent:'space-evenly',alignItems:'start'}}>
                <div className="content-container-descriptions">
                <h2>Description:</h2>
          <p style={{fontSize:'12px'}}>{description}</p>
                </div>
                <div className="content-container-descriptions">
                <h2>Functions:</h2>
          <p style={{fontSize:'12px'}}>{functions}</p>
                  </div>
                  <div className="content-container-descriptions">
                <h2>Tech:</h2>
          <p style={{fontSize:'12px'}}>{methods}</p>
                  </div>

            </div>
          
             {id === 'c' ? (
                <motion.div
                className="card-image-container2"
                layoutId={`title-container-${id}`}
              >
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ pointerEvents: "auto" }}
              className="overlay4"
              >
             <a target="_blank" href={projectLink2}><AiFillEye style={{width:'40px',height:'40px',color: 'var(--secondary-color)'}}/></a>
              </motion.div>
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ pointerEvents: "auto" }}
              className="overlay5"
              >
             <a target="_blank" href={codeLink2}><AiFillGithub style={{width:'40px',height:'40px',color: 'var(--secondary-color)'}}/></a>
              </motion.div>
            <img  src={image2} alt="" />
            </motion.div>
             ):(
              <></>
               )};
             {id === 'd' ? (
                <motion.div
                className="card-image-container2"
                layoutId={`title-container-${id}`}
              >
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ pointerEvents: "auto" }}
              className="overlay4"
              >
             <a target="_blank" href={projectLink2}><AiFillEye style={{width:'40px',height:'40px',color: 'var(--secondary-color)'}}/></a>
              </motion.div>
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ pointerEvents: "auto" }}
              className="overlay5"
              >
             <a target="_blank" href={codeLink2}><AiFillGithub style={{width:'40px',height:'40px',color: 'var(--secondary-color)'}}/></a>
              </motion.div>
            <img  src={image2} alt="" />
            </motion.div>
             ):(
              <></>
               )};

          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
