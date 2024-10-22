import Image from 'next/image';
import coding from './public/coding.png';
import './home.css';

export default function Home() {
  return (
    <div>
      
      
    <h1 className='hero'>Innovating the <br/> Future of Software <br/> Solutions</h1>
   
    <Image
        src={coding}  
        alt="Code pic"
        width={300}
        height={100}
        className="codepic"
      />
  <a href='./contact'><button className='btn'>Get started</button></a>
  <h1 className='heading2'>Why choose us?</h1>
  <hr/>
  <p className='para'>At our company, we pride ourselves on leveraging cutting-edge technology to deliver advanced software solutions tailored to meet the needs of modern businesses. Our expert team, composed of highly skilled professionals, brings deep industry knowledge and experience to every project. We provide scalable solutions that grow with your business, ensuring long-term success. With a customer-centric approach,
     we focus on delivering personalized solutions,
     and our fast implementation process ensures we meet your timelines efficiently. 
     Additionally, our 24/7 support team is always available to assist you whenever you need help.
     </p>
   
     
  </div>
  );
}
