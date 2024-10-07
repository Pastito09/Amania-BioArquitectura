import ObraCard from './ObraCard';

export const Obras = () => {
  return (
    <>
      <div className='grid grid-cols-1 mt-10 gap-2 md:gap-5 mb-2'>
        <ObraCard />

        <ObraCard />
        <ObraCard />
        <ObraCard />
      </div>
    </>
  );
};

export default Obras;
