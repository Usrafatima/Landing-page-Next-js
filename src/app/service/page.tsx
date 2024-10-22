import Image from 'next/image';
import mobiledev from '../public/mobiledev.png';
import uiux from '../public/uiux.png';
import webdev from '../public/webdev.png';
import softwaredev from '../public/softwaredev.png';
import consulting from '../public/consulting.png';
import cloud from '../public/cloud.png';


import './service.css'
export default function service(){
    return(
        <div>
        <h1 className='main'>Our Service</h1>
     
    <div className='csd'>
    <h1 className='text-2xl font-bold'>Custom Software Development</h1>
    <p>We design and develop tailor-made software solutions that address the specific needs of your business.<br/> From conceptualization to deployment, 
        our expert developers ensure a seamless process to create <br/>scalable, efficient software that enhances business operations.Tailored software solutions to meet your<br/> specific business needs, leveraging cutting-edge technology to deliver efficiency and innovation.</p>
        </div>
   
        <Image
        src={softwaredev} 
        alt="Dev"
        width={450}
        height={100}
        className='software-dev'
      />
        <div className='webdev'> 
        <h1 className='text-2xl font-bold'>Web Development</h1>
        <p>Our team specializes in building responsive, high-performing websites designed to deliver an exceptional user experience across all devices, from desktops to mobile phones. With expertise in both front-end and back-end development,
             we create visually appealing, highly functional websites that meet the latest industry standards. By combining clean, modern design with robust technical frameworks, we ensure that our
             websites not only look great but also offer seamless navigation, fast load times, and enhanced accessibility for users. </p>
             </div>
             <Image
        src={webdev} 
        alt="Dev"
        width={450}
        height={100}
        className='web-dev'
      />
         
             <div className='mobiledev'>
             <h1 className='text-2xl font-bold'> Mobile App Development</h1>
             <p>We create sleek, user-friendly mobile applications for both Android and iOS platforms, tailored to meet the <br/>specific needs of your business. Whether it's a business app, e-commerce platform, or social network, we <br/>focus on delivering mobile solutions that not only engage users but also align with your overall business goals. <br/>Our development process is centered around creating high-performance, secure, and scalable
                 applications <br/>that provide a seamless experience for users, ensuring smooth navigation, fast loading times, and an intuitive interface.</p>
             </div>
             <Image
        src={mobiledev} 
        alt="Dev"
        width={450}
        height={100}
        className='mobile-dev'
      />
             <div className='uiux'>
             <h1 className='text-2xl font-bold'>UI/UX Design</h1>
             <p>We prioritize user experience by delivering UI/UX designs that are not only visually appealing but also highly intuitive, ensuring that every interaction on your website or app is smooth, seamless, and user-centered. Our approach begins with a deep understanding of your target audience, their needs, and how they interact with digital platforms.
                 This allows us to craft user interfaces that guide them effortlessly through your site or app, enhancing their overall 
                 experience while making it enjoyable and easy to use.</p>
                 </div>
                 <Image
                 src={uiux} 
        alt="Dev"
        width={450}
        height={100}
        className='uiux-dev'
      />
             <div className='cis'>
             <h1 className='text-2xl font-bold'>Cloud Integration Services</h1>
             <p>Leverage the transformative power of cloud computing to optimize your business infrastructure and <br/>operations. 
                Our cloud integration services provide seamless scalability, enhancing your ability to store,<br/> manage, and access data securely.
                 By integrating advanced cloud technologies, we help businesses<br/>/reduce operational costs, improve flexibility, and ensure data integrity. 
                 Whether you're looking to migrate to <br/>the cloud, build hybrid cloud environments, or enhance your existing cloud framework, our team ensures<br/> that your infrastructure
                  is future-proof, secure, and capable of supporting your business growth.</p>
             </div>
             <Image
        src={cloud} 
        alt="Dev"
        width={420}
        height={100}
        className='cloud-dev'
      />
             <div className='it'>
          <h1 className='text-2xl font-bold'>IT Consulting</h1>
          
          <p>We provide comprehensive strategic IT consulting services to help businesses seamlessly align their technology initiatives with overarching business objectives.
             Our experienced consultants work closely with your team to optimize your technology infrastructure, streamline processes, and identify opportunities for improvement.
              By tailoring technology strategies to meet your unique business needs, we ensure your organization remains competitive in a rapidly evolving digital landscape.
             Our consulting services focus on enhancing overall business efficiency, mitigating risks, and driving innovation.</p>
          </div>
          <Image
        src={consulting} 
        alt="Dev"
        width={400}
        height={100}
        className='consult'
      />
          
         </div>
        
    )
}
     {/* <Image
        src={software}  
        alt="Code pic"
        width={300}
        height={100}
        className="softwarepic"
      /> */}         