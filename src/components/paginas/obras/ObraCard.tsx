import Image from 'next/image';
import './styles.css';
import Link from 'next/link';

export const ObraCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-600/50 rounded-sm '>
      <div className='mb-2 overflow:hidden flex  justify-center md:justify-normal col-span-1 '>
        <Image
          src={'/techoCasa.jpeg'}
          alt=''
          height={100}
          width={500}
          className='object-contain rounded-lg mt-0 ms-0 md:mt-2 md:ms-2 flex-none'
        />
      </div>
      <div className='mx-5 my-auto mt-8 flex-col text-sm col-span-1 text-gray-300 text-wrap'>
        <h1 className='text-center text-xl mb-6'>
          <span>Nombre de la obra</span>
        </h1>
        <hr />
        <div className='max-w-prose'>
          <h2 className='ms-1 mt-2'>
            <span>Ubicación:</span>
          </h2>
          <p className='mt-1 ms-20 font-semibold text-clip overflow-hidden'>
            <span>Calle Falsa 123, Springfield.</span>
          </p>
          <h2 className='ms-1 mt-2'>
            <span>Año:</span>
          </h2>
          <p className='mt-1 ms-20 font-semibold'>
            <span>1987</span>
          </p>
          <h2 className='ms-1 mt-2'>
            <span>Superficie:</span>
          </h2>
          <p className='mt-1 mb-2 ms-20 font-semibold'>
            <span>4200 mts2</span>
          </p>
        </div>

        <hr />
        <Link href={'/obras/u'} className='hover:text-gray-100 '>
          <p className='mb-5 mt-4 md:mt-8 me-10 font-medium text-end'>
            <span>
              <em>Leer mas...</em>
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ObraCard;
