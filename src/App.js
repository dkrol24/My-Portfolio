import React from 'react'
import {About,Footer,Header,Skills,Work} from './container'
import {Navbar} from './components'
import './App.scss'

import {AnimatePresence } from "framer-motion";
import {Item} from './container/Work/Item'

import {Route} from 'react-router-dom'
function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <Work selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}



const App = () => {
  return (

    <div className='app'>
      <Navbar/>
      <Header />
      <About />
      <Route path={["/:id", "/"]} component={Store} />
      <Skills/>
      <Footer />
  
    </div>

  )
}

export default App


