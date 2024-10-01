// import Image from 'next/image';
import HomePageSlider from './HomePageSlider';

export const HomePage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 my-2 gap-2'>
      <div className='content-center '>
        {/* <Image
          src={'/interiorCasa.jpeg'}
          width={550}
          height={550}
          alt='Logo Amania Bio-Arquitectura'
          className='object-cover px-1 md:px-0'
          quality={100}
          priority={true}
        /> */}
        <HomePageSlider />
      </div>

      <div className='text-slate-300 ms-4 mt-5 me-5 col-span-2'>
        <h1 className='text-xl mt-6'>Hola gente:</h1>
        <p className='mt-2'>
          <span>
            <span className='ms-5'>Lorem</span> ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa nisi quae quam fuga
            sapiente culpa voluptatem nobis, distinctio fugiat velit,
            iste eaque adipisci corporis non molestiae. Cupiditate
            sapiente asperiores obcaecati.
          </span>
        </p>
        <h1 className='text-xl mt-6'>Hola gente:</h1>
        <p className='mt-2'>
          <span>
            <span className='ms-5'>Lorem</span> ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa nisi quae quam fuga
            sapiente culpa voluptatem nobis, distinctio fugiat velit,
            iste eaque adipisci corporis non molestiae. Cupiditate
            sapiente asperiores obcaecati.
          </span>
        </p>
        <h1 className='text-xl mt-6'>Hola gente:</h1>
        <p className='mt-2'>
          <span>
            <span className='ms-5'>Lorem</span> ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa nisi quae quam fuga
            sapiente culpa voluptatem nobis, distinctio fugiat velit,
            iste eaque adipisci corporis non molestiae. Cupiditate
            sapiente asperiores obcaecati.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
