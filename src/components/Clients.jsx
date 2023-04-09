import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Clients = () => (
  <section
    id='clients'
    className='flex justify-center items-center sm:py-16 py-6 flex-col relative'
  >
    <div className='absolute z-[1] w-[60%] h-[60%] -right-[50%] rounded-full green__gradient' />
    <div className='absolute z-[0] w-[40%] h-[40%] -right-[50%] rounded-full white__gradient' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
        Lo que dicen <br className='sm:block hidden' /> de nosotros
      </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className='font-poppins font-normal text-[#E1D9D1] text-[18px] leading-[30.8px] text-left max-w-w[450px]'>
          Todo lo que necesitas para comenzar de nuevo con una vida saludable y
          totalmente renovada.
        </p>
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Clients;
