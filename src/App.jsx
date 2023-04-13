// import { Configuration, OpenAIApi } from "openai";
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
  // const [prompt, setPrompt] = useState("");

  // const [response, setResponse] = useState("");

  const assNiggaFunc = async () => {
    const configuration = new Configuration({
      apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 7,
    });

    console.log(response);
  };

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

          {/* <form className='w-96' onSubmit={handleData}>
            <div>
              <label
                htmlFor='prompt'
                className='block text-sm text-left font-medium leading-6 text-white'
              >
                Add your prompt
              </label>
              <div className='mt-2'>
                <textarea
                  rows={4}
                  name='prompt'
                  id='prompt'
                  onChange={(e) => setPrompt(e.target.value)}
                  className='block bg-transparent px-1  w-full rounded-md border-0 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6 focus:border-0'
                  defaultValue={""}
                />
              </div>
            </div>
            <div className='mt-4 flex justify-start'>
              <button
                type='submit'
                className='rounded-md bg-indigo-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              >
                Submit prompt
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default App;
