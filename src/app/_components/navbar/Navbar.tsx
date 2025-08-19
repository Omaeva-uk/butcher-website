"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import logo from "../../../../public/assets/logo-white.png"; // Adjust the path as necessary
import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'next/link';
import menuLogo from "../../../../public/assets/menu-open-icon.png";


type WindowSize = {
    width: number | null;
    height: number | null;
}

const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false);
      
    const windowSize: WindowSize = useWindowSize();
    console.log(windowSize);

    
    

    



  return (
    <header className='bg-main-color font-lato'>
    {
        windowSize.width !==null && windowSize.width > 690 ? (
                <nav className='container flex justify-between items-center'>
                    <div>
                        <Link href={"/"}><Image src={logo} height={80} width={230} alt='Logo' /></Link>
                    </div>
                    <div>
                        <ul className='flex items-center gap-6 uppercase text-white'>
                            <li><Link href="/#about-us">About Us</Link></li>
                            <li className='px-3 py-1 text-main-color bg-white rounded-full'><Link href="/#contact-us">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
        ) : (
                <nav className='bg-main-color flex justify-between items-center relative container'>
                    <div>
                        <Link href={"/"}><Image src={logo} height={80} width={230} alt='Logo' /></Link>
                    </div>
                    <div className=''>
                        <div className='text-2xl' onClick={() => setMobileNav(prev => !prev)}>
                            <Image src={menuLogo} width={20} height={20} alt='Menu Icon' />
                        </div>
                        <ul className={`${mobileNav ? 'flex' : 'hidden'} flex-col gap-6 items-end p-6 absolute z-[999] top-12 text-white left-0 right-0 bg-black`}>

                            <li><Link href={'/#about-us'}>About Us</Link></li>
                            <li><Link href={'/#about-us'}>Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
        )
    }
    </header>
  )
}

export default Navbar;