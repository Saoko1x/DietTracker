import { features } from "../constants";
import Button from "./Button";

const FetureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.lenght - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div className='w-[64px] h-[64px] rounded-full flex justify-center items-center bg-[#19300E]'>
      <img src={icon} alt='icon' className='w-[60%] h-[60%] obect-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-[#E1D9D1] text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
);

function Features() {
  return (
    <section id='features' className='flex md:flex-row flex-col sm:px-16 px-6'>
      <div className='flex-1 flex justify-center items-start flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
          Elige las formas más sencillas <br className='sm:block hidden' /> de
          administrar tu alimentación
        </h2>
        <p className='font-poppins font-normal text-[#E1D9D1] text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
          Decide tu propia manera de comer, personalizar tus alimentos y
          sincronizar todo con tu propia agenda.
        </p>

        <Button styles='mt-10' />
      </div>

      <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col'>
        {features.map((feature, index) => (
          <FetureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Features;
