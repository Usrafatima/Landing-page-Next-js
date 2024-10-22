import './contact.css';
import Image from 'next/image';

import linkedin from '../public/linkedin.png';
import github from '../public/github.png';

export default function Contact() {
  return (
    <div className='contact-card'>
      {/* <h1 className='contact-header'>Contact</h1> */}
      <form action="#" method="post" id="mainform">
        <div className="form-group">
          <label htmlFor="name" className="name">Full Name</label>
          <input type="text" id="name" name="name" required className="form-input1" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className='email'>Email</label>
          <input type="text" id="email" name="email" className="form-input2" />
        </div>
        
        <div className="form-group">
          <label htmlFor="msg" className='msg'>Message</label>
          <textarea id="message" name="message" rows={1} className="form-input3"></textarea>
        </div>

        <button type="submit" className='contact-button'>Contact me</button>
      </form>

      {/* <p className='contact-email'>yusra7003@gmail.com</p> */}
      <h1 className='location-header'>Based in</h1>
      <p className='location'>Karachi, Pakistan</p>

      <div className='social-links'>
        <a href="https://www.linkedin.com/in/yusra-fatima-66b49b2b8/">
          <Image 
            src={linkedin} 
            alt="LinkedIn logo" 
            width={100} 
            height={100} 
            className="linkedin-logo" 
          />
        </a>
        <a href="https://github.com/Usrafatima">
          <Image 
            src={github} 
            alt="GitHub logo" 
            width={100} 
            height={100} 
            className="github-logo" 
          />
        </a>
      </div>
    </div>
  );
}
