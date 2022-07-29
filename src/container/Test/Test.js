import React from 'react'
import React, { useState, useEffect } from 'react';





const Test = () => {
    const toggleModal = () => setHideModal(!hideModal);
    const [hideModal, setHideModal] = useState(true);
    const configModal = {
      hideModal,
      toggleModal
    };




  return (
    <div>Test</div>
  )
}

export default Test