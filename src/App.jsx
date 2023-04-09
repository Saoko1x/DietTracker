import {
  Navbar,
  Stats,
  Features,
  Selector,
  Clients,
  Footer,
  Hero,
  ClientsLogos,
  CTA,
} from "./components";

const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className='px-6 sm:px-16 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className='bg-black flex justify-center items-start '>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <div className='bg-black flex px-6 sm:px-16 justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Stats />
          <Features />
          <Selector />
          <Clients />
          <ClientsLogos />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
