

import Link from 'next/link';


import styles from './page.module.css';
import Image from 'next/image';


import Head from 'next/head';

export default function Home() {
    

  
  return (
    <div  className='container'>
     
        
        
      <main >
        <div>
          <img src="/iste_logo-01-removebg-preview.png" alt="ISTE Logo" />
        </div>
        <h1>NITH</h1>
        <h1>ISTE</h1>

        <nav>
          <ul>
            <li><Link href="/HOME"><a>HOME</a></Link></li>
            <li><Link href="/MEMBERS"><a>MEMBERS</a></Link></li>
            <li><Link href="/EVENTS"><a>EVENTS</a></Link></li>
            <li><Link href="/GALLERY"><a>GALLERY</a></Link></li>
            <li><Link href="/BLOGS"><a>BLOGS</a></Link></li>
            <li><Link href="/PROJECTS"><a>PROJECTS</a></Link></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

