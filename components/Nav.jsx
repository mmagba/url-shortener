'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className='relative custom__container mx-auto pt-12'>

            <div className='flex items-center justify-between'>

                <div className="flex gap-10 items-center">
                    <Image src='/logo.svg' width={125} height={125} alt='shortly logo' />
                    <Link className='text-gray hover:text-veryDarkBlue font-bold hidden md:inline' href='/'>Features</Link>
                    <Link className='text-gray hover:text-veryDarkBlue font-bold hidden md:inline' href='/'>Pricing</Link>
                    <Link className='text-gray hover:text-veryDarkBlue font-bold hidden md:inline' href='/'>Resources</Link>
                </div>


                <div className="md:flex hidden gap-10 items-center">

                    <Link className='text-gray hover:text-veryDarkBlue hidden md:block font-bold' href='/'>
                        Login
                    </Link>
                    <Link className='font-bold bg-cyan hover:bg-lightCyan text-white rounded-full pb-3 px-6 pt-2 hover:bg-brightRedLight hidden md:block' href='/'>
                        Sign Up
                    </Link>
                </div>





                {/*Hamburger menu button*/}
                <button
                    id="menu-btn"
                    className={"block hamburger md:hidden focus:outline-none " + (mobileMenuIsOpen ? 'open' : '')}
                    onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>

            </div>

            <div className="md:hidden">
                <div
                    id="menu"
                    className={" bg-darkViolet rounded-md absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold text-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md " + (mobileMenuIsOpen ? 'flex' : 'hidden')}
                >
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} href='/'>Features</Link>
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} href='/'>Pricing</Link>
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} href='/'>Resources</Link>
                    <div className="thinGrayLine"></div>
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} href='/'>Login</Link>
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} className='bg-cyan p-3 w-4/5 text-center rounded-full' href='/'>Sign Up</Link>
                </div>
            </div>
        </nav >
    )
}

export default Nav