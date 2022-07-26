import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF,FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
      <a href="https://www.facebook.com/dawid.krol.526/" target="_blank" rel="noopener noreferrer">
    <div>
      <FaFacebookF />
    </div>
      </a>
      <a href="https://www.linkedin.com/in/dawid-kr%C3%B3l-0426971b6/" target="_blank" rel="noopener noreferrer">
    <div>
      <FaLinkedin />
    </div>
      </a>
    <a href="https://twitter.com/Dkrol24" target="_blank" rel="noopener noreferrer">
    <div>
      <BsTwitter />
    </div>
      </a>
  </div>
);

export default SocialMedia;