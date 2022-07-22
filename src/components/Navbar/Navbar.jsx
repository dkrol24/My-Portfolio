import React,{useState} from 'react'
import {HiMenu, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'

import './Styles.scss'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (

    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1 className='testing'>David</h1>
        
        <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
        <div className="app__navbar-menu">
            <HiMenu onClick={() => setToggle(true)}/>

            {toggle && (
              <motion.div  animate={{
                x: [300,0],
                position: "fixed",
              }}>
                <HiX onClick={()=> setToggle(false)}/>
                <ul className='app__navbar-links'>
                {['home', 'about','work','skills','contact'].map((item) => (
                  <li className='app__flex p-text' key={item}>
                  <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}
                  <div className='app__navbar-ball'/>
                  </a>
                  </li>
          ))}
          </ul>
              </motion.div>
            )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar