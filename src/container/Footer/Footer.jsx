import React, {  useState} from 'react';
import emailjs from '@emailjs/browser';
import  images  from '../../constants/images';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Styles.scss';

const Footer = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
     message: '',
   });
   const [status, setStatus] = useState(false)
   const [loading, setLoading] = useState(false);
   
 
 const handleChange = (e) => {
   setValues(values => ({
     ...values,
     [e.target.name]: e.target.value
   }))
 };
 const handleSubmit = (e) => {
   e.preventDefault();
   emailjs.send('service_vp66n7q', 'template_awe19s9', values, 'smQiWYotfaIg-1_RE')
   .then(response => {
     console.log('Wiadomość wysłana!', response)
     setValues({
       fullName: '',
      email: '',
       message: '',
     });
     setStatus(true);
     setLoading(true);
   },error=>{
     console.log('Podaj dane i zaakceptuj regulamin.', error)
   })
 };
 


  return (
    <>
      <h2 className="head-text">Get in touch <span>||</span> chat with me</h2>

      
      {!status ? (
         <form  onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="fullName" value={values.fullName} onChange={handleChange} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={values.email} onChange={handleChange} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={values.message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="p-text">Send</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      <div className="app__footer-cards">
          <a href="mailto:krold2191@gmail.com" className="p-text">krold2191@gmail.com
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
        </div>
          </a>
          <a href="tel:+48 530-764-578" className="p-text">530-764-578
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
        </div>
          </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);