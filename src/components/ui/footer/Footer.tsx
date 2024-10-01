'use client';
import { useNavbarStore } from '@/store/navbar-store';
import Image from 'next/image';
import Link from 'next/link';
import {
  IoLocation,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMail,
} from 'react-icons/io5';

export const Footer = () => {
  const closeMenu = useNavbarStore((state) => state.closeMenu);

  return (
    <div
      className='flex w-full justify-center text-center text-sm md:text-xs bg-gray-800 mt-auto'
      onClick={closeMenu}
    >
      <div className='flex flex-col'>
        <div className='mx-auto my-auto'>
          <Link href={'/'}>
            <Image
              src={'/Logo.png'}
              height={10}
              width={80}
              alt='Logo'
              className='mt-5'
            />
          </Link>
        </div>

        <div className='w-full h-px bg-gray-200 mt-8 mb-3 ' />

        <div className='my-2 mb-5'>
          <div className='my-2 text-gray-300'>
            <span>Contacto:</span>
          </div>

          <div className='flex justify-center '>
            <Link
              href='https://www.instagram.com/amania.arquitectura/'
              className='flex gap-2 m-1 text-gray-300 hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoInstagram size={15} className='my-auto' />
              <span>instagram.com/amania.arquitectura</span>
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link
              href='https://www.facebook.com/Amania.bioarquitectura'
              className='flex gap-2 m-1 text-gray-300 hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoFacebook size={16} />
              <span>facebook.com/Amania.bioarquitectura</span>
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link
              href='mailto:amania.arquitectura@gmail.com'
              className='flex gap-2 m-1 text-gray-300 hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoMail size={15} />
              <span>amania.arquitectura@gmail.com</span>
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link
              href='https://wa.me/541160272552'
              className='flex gap-2 m-1 text-gray-300 hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoWhatsapp
                size={15}
                className='justify-self-start'
              />
              <span>+54 9 116-027-2552</span>
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link
              href='https://maps.app.goo.gl/4DAtnFsRNV5u3yKg8'
              className='flex gap-2 m-1 text-gray-300 hover:text-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLocationOutline size={15} />
              <span>
                Av. de los Comechingones, X5199 Villa Amancay, Córdoba
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
