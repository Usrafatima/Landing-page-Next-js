import Image from 'next/image';
import software from '../public/software.png';
import chris from '../public/chris.jpg';
import emilybanks from '../public/emily banks.jpg';
import emily from '../public/emily.jpg';
import woman2 from '../public/woman2.jpg';
import rb_7910 from '../public/rb_7910.png';

import './about.css';

export default function Home() {
  return (
    <div>
      <h1 className='main-head'>Our mission</h1>
      <hr className=' line1 w-15 ml-80'/>
      <p className='main-para'>
        Our mission is to empower businesses with smart, innovative software solutions that solve real-world challenges and <br/>unlock new opportunities. 
        We aim to simplify the complexities of technology, allowing our clients to focus on what they<br/> do best. To transform industries through technology, 
        making cutting-edge digital solutions accessible and beneficial for<br/> businesses of all sizes. 
        We envision a world where businesses leverage technology to stay ahead in a constantly evolving market.
      </p>
     
      <Image
        src={rb_7910} 
        alt="Dev"
        width={400}
        height={200}
        className='about-man'
      />
      <Image
        src={software} 
        alt="Dev"
        width={390}
        height={100}
        className='devs-pic'
      />

      <h1 className='story-head'>Our story</h1>
      <hr className='line2'/>
      <p className='story-para'>
        Founded in 2020, we started as a small, dynamic team of tech enthusiasts who wanted to change the way businesses adopt technology.<br/> 
        Our journey began with a few ambitious projects, and through passion and perseverance, we've rapidly expanded, delivering scalable 
       <br/> and innovative software solutions to businesses worldwide. From startups to large enterprises, we’ve helped clients streamline operations,<br/> 
        increase efficiency, and stay competitive in the digital age.
      </p>

     
      <h1 className='core-head'>Core Values</h1>
      <hr className='-mt-1 w-64'/>
      <p className='core-para'>
     <h2 className='creative1'>Creativity:</h2><p className='sentence1'> We embrace new ideas and approaches, constantly pushing the limits of technology.</p><br/>
     <h2 className='creative2'> Adaptability:</h2> <p className='sentence2'> We stay agile and flexible to meet the evolving needs of our clients and the industry.</p><br/>
     <h2 className='creative3'>Accountability:</h2> <p className='sentence3'>We take responsibility for our work, ensuring every project meets the highest standards of quality and reliability.</p><br/>
     <h2 className='creative4'> Transparency:</h2> <p className='sentence4'>Open communication and honest relationships form the foundation of how we work</p><br/>
     <h2 className='creative5'>Innovation:</h2>  <p className='sentence5'> We strive to be at the forefront of technological advancements, integrating the latest innovations into everything we do.</p>
</p>



      <h1 className='team-head'>Team Overview</h1>
      <div className="team-container">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <Image
                src={emily} 
                alt="Emily White"
                width={200}
                height={120}
              />
            </div>
            <div className="card-back alex">
              <p>
               <p className='text-2xl font-bold '>Alex Green</p> <br/> <p className='text-1xl font-bold -mt-8'>Founder & CEO </p><br/>
              
               <hr className='-mt-5 w-44'/><p className='mt-3 text-1xl font-bold'>With a background in software development and business management, Alex leads the team with a focus on innovation and client success.</p>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <Image
                src={emilybanks} 
                alt="Sophie Taylor"
                width={200}
                height={100}
              />
            </div>
            <div className="card-back emily">
              <p>
                <p className='text-2xl font-bold '>Emily White</p><br/> <p className='text-1xl font-bold -mt-7'>Head of Development</p> <br/> 
                 <hr className='-mt-5 w-44'/> <p className='mt-4 text-1xl font-bold'>Emily oversees all technical projects, ensuring they’re delivered on time and to the highest standards.</p>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <Image
                src={chris} 
                alt="Chris Evans"
                width={200}
                height={100}
              />
            </div>
            <div className="card-back chris">
              <p>
              <p className='text-2xl font-bold '>Chris Evans</p><br/> <p className='text-1xl font-bold -mt-6'>Head of Operations</p><br/>
              <hr className='-mt-5 w-44'/> <p className='mt-3 text-1xl font-bold'> Chris ensures seamless operations and optimizes processes to keep the company running efficiently.</p>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <Image
                src={woman2} 
                alt="Sophie Taylor"
                width={400}
                height={100}
              />
            </div>
            <div className="card-back sophie">
              <p>
              <p className='text-2xl font-bold -mt-3'> Sophie Taylor</p> <br/> 
              <p className='text-1xl font-bold -mt-7'>Product Manager</p><br/><hr className='-mt-5 w-44'/><p className='mt-3 text-1xl font-bold'> Sophie specializes in translating client needs into effective software products, ensuring that the user experience is at the core of everything we build.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
