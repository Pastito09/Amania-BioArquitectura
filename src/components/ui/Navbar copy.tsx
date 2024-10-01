'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { NavbarCol } from './navbar/NavbarCol';

const paginas = [
  {
    nombre: 'Obras',
    href: '/obras',
  },
  {
    nombre: 'Detalles constructivos',
    href: '/detalles-constructivos',
  },
  {
    nombre: 'Planos',
    href: '/planos',
  },
  {
    nombre: 'Contacto',
    href: '/contacto',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className='flex justify-between bg-blue-200 w-full h-[100px] px-5 mb-2'>
      <div className='pb-2 flex'>
        <Link href={'/'}>
          <Image
            src={'/Logo.png'}
            alt='Logo Amania Bio-Arquitectura'
            width={130}
            height={100}
            className='w-full h-full min-w-full'
          />
        </Link>
      </div>

      {/* <div className='collapse md:visible flex flex-wrap justify-items-center items-center gap-8 pr-2 mt-5'>
        {paginas.map(({ nombre, href }) => (
          <Link
            href={href}
            key={nombre}
            className='text-lg font-medium antialised'
          >
            {nombre}
          </Link>
        ))}
      </div> */}

      <div className='flex items-center mt-4'>
        <button
          className='visible md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          hola
        </button>
        <Link href={'/'} className='hidden md:block'>
          <IoHomeOutline size={25} />
        </Link>
      </div>
      <NavbarCol paginas={paginas} />
    </nav>
  );
};

export default Navbar;
