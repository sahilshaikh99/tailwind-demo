'use client';
import { use } from 'react';
import { FaHamburger } from 'react-icons/fa';


export const Header = () => {
    const toggleMenu = () => {
        const menu = document.getElementById('mobile-menu');
        menu?.classList.toggle('hidden');
    }
    return (
        <>
        <nav className="mx-5 sm:mx-auto sm:container">
                <div className="flex justify-between py-5">
                    <span className="font-bold text-2xl">MyLogo</span>
                    <ul className="hidden md:flex gap-6 font-bold py-2">
                            <li className='hover:cursor-pointer'>About</li>
                            <li className='hover:cursor-pointer'>Pricing</li>
                            <li className='hover:cursor-pointer'>Learn</li>
                            <li className='hover:cursor-pointer'>Customers</li>
                            <li className='hover:cursor-pointer'>Contact</li>
                    </ul>
                    <div className="hidden md:flex gap-4 mt-0">

                        <button className="border-slate-400 border-1 rounded-3xl px-5 py-2">
                            Try for free
                        </button>
                        <button className="bg-emerald-500 text-white font-bold rounded-3xl px-5 py-2">
                            Sign In
                        </button>
                    </div>
                    <div className='md:hidden'>
                        <FaHamburger onClick={()=>toggleMenu()}/>
                    </div>

                </div>
                <div id="mobile-menu" className='mobile-nav hidden md:hidden max-w-screen h-screen inset-0ounded-xl'>
                      <div className='pt-6'>
                        <ul className="flex flex-col gap-7 font-bold py-2 [&>li]:border-b-1 [&>li]:pb-4 [&>li]:border-slate-300">
                            <li className='hover:cursor-pointer'>About</li>
                            <li className='hover:cursor-pointer'>Pricing</li>
                            <li className='hover:cursor-pointer'>Learn</li>
                            <li className='hover:cursor-pointer'>Customers</li>
                            <li className='hover:cursor-pointer'>Contact</li>
                    </ul>
                    <div className="flex justify-between gap-4 mt-10">
                        <button className="border-slate-400 justify-center border-1 rounded-3xl w-full p-2">
                            Try for free
                        </button>
                        <button className="bg-emerald-500 text-white font-bold rounded-3xl w-full p-2">
                            Sign In
                        </button>
                    </div>
                    </div>

                    </div>
        </nav>
        </>
    )
}