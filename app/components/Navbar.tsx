import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white font-sans shadow-sm">Navbar
      <nav className="flex justify-between items-center">
        <Link href="/">
        <img className="logo"/>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar