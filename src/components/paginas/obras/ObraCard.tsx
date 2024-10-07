import Image from 'next/image';
import './styles.css';
import Link from 'next/link';

export const ObraCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 '>
      <div className='mb-2 overflow:hidden flex items-center justify-center rounded-md col-span-1'>
        <Image
          src={'/techoCasa.jpeg'}
          alt=''
          height={100}
          width={500}
          className='object-contain  '
        />
      </div>
      <div className='mx-1 md:mx-24 mt-8 flex-col text-sm col-span-2 text-gray-300'>
        <h1>
          <span>Obra n° 1</span>
        </h1>
        <h2 className='ms-1 mt-2'>
          <span>Algo</span>
        </h2>
        <p className='mt-1'>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam voluptas, dolores beatae aliquid delectus rerum at
            dicta eum tenetur blanditiis maxime, sapiente officia
            dolorum libero! In ratione itaque optio quasi.
          </span>
        </p>
        <h2 className='ms-1 mt-2'>
          <span>Algo</span>
        </h2>
        <p className='mt-1'>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas quaerat facere ab amet quisquam expedita dolorum
            qui provident error eaque, repudiandae veritatis! Hic
            sequi impedit reprehenderit nostrum tenetur praesentium
            molestias.
          </span>
        </p>
        <h2 className='ms-1 mt-2'>
          <span>Algo</span>
        </h2>
        <p className='mt-1'>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas quaerat facere ab amet quisquam expedita dolorum
            qui provident error eaque, repudiandae veritatis! Hic
            sequi impedit reprehenderit nostrum tenetur praesentium
            molestias.
          </span>
        </p>
        <Link href={'/obras/u'} className='hover:text-gray-100'>
          <p className='mt-5 ms-5 font-medium'>
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
