import { eating } from "../assets";

const Selector = () => (
  <section
    id='product'
    className='flex md:flex-row flex-col-reverse sm:px-16 px-6'
  >
    <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
      <img
        src={eating}
        alt='eat'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>

    <div className='flex-1 flex justify-center items-start flex-col'>
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
        Toma el control <br className='sm:block hidden' /> de tu alimentacion
      </h2>
      <p className='font-poppins font-normal text-[#E1D9D1] text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        Aprovecha el 100% de descuento en nuestro lanzamiento.
      </p>
    </div>
  </section>
);

export default Selector;
