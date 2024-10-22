import './header.css';
import Link from 'next/link';
export default function  Header() {
    return (
     <div className="header">
        <ul className=" home flex justify-end ml-5 gap-20 font-bold container mx-auto">
          <li className="mt-2">
            <Link href="/">Home</Link>
          </li>
          <li className="service  mt-2">
            <Link href= "/service">Services</Link>
          </li>
          <li className=" about mt-2">
            <Link href="/about">About</Link>
          </li>
          <li className=" contact mt-2">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <h1 className='coname'>Startup Devs</h1>
      </div>
    );
  }