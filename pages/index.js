import { GoMarkGithub } from "react-icons/go";
import { ImTwitter } from "react-icons/im";

const Title = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 text-white mt-16 mb-8 text-2xl p-2 rounded-sm">
      {children}
    </div>
  );
};

const SocialNetworks = () => {
  return (
    <div className="flex gap-2">
      <a href="https://github.com/bvedes?tab=repositories" target="_blank">
        <GoMarkGithub />
      </a>
      <a href=" https://twitter.com" target="_blank" className="text-blue-500">
        <ImTwitter />
      </a>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className="w-full p-6 lg:p-0 sm:w-800 mx-auto">
        <div className="flex py-16">
          <img
            className="rounded-full h-24 w-24"
            src="/assets/Benvinda.jpg"
            alt="Picture of the author"
          />
          <div className="flex flex-col gap-1 px-4">
            <div className="text-3xl font-bold text-purple-900 leading-none">
              Benvinda Vedes
            </div>
            <div>#BLM | Frontend Developer</div>
            <SocialNetworks />
          </div>
        </div>

        <div className="mt-2 text-4xl text-purple-900">Hi everyone!</div>
        <Title>About Me</Title>
        <div className="flex flex-col gap-8 p-2">
          <div>
            I'm an Angolan freeCodeCamp student living in Portugal. I'm married
            to Edo, a Software Engineer working in the JavaScript/React
            ecosystem. I've became interested in learning to code from seeing
            him studying every day. He's everything to me 💜
          </div>
          <div>
            I've been a bank teller in Angola since 2011. I've moved with the
            kids (Teresa and Benedita) to Portugal in 2018, to join my husband
            in his country. I'm studying in freeCodeCamp since the beginning of
            2020, the moment I've decided to change careers. I'm certain the
            future will bring more and more opportunities to the technological
            field.
          </div>
          <div>
            At the present time I'm looking for my first remote job opportunity
            as a junior developer in a JavaScript/React gig. I have a lot of
            passion, strength, perseverance and courage to face all these
            obstacles to become a software engineer.
          </div>
        </div>
        <Title>Working Experience</Title>
        <div className="p-2">
          FEV 2011 - MAY 2018 Worked as a bank teller in BNI Angola.
        </div>
        <Title>Portfolio</Title>
        <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-8">
          <div>
            <a
              className="p-2 underline hover:no-underline text-blue-600 hover:text-blue-800"
              href="http://bvedes.github.io/random-quote-machine"
              target="_blank"
            >
              Random-Quote-Machine
            </a>
            <img src="/assets/random-quote-machine.png" />
          </div>

          <div>
            <a
              className="p-2 underline hover:no-underline text-blue-600 hover:text-blue-800"
              href="http://bvedes.github.io/build-markdown-previewer"
              target="_blank"
            >
              Markdown-Previewer
            </a>
            <img src="/assets/markdown-previewer.png" />
          </div>
          <div>
            <a
              className="p-2 underline hover:no-underline text-blue-600 hover:text-blue-800"
              href="http://bvedes.github.io/drum-machine"
              target="_blank"
            >
              Drum-Machine
            </a>
            <img src="/assets/drum-machine.png" />
          </div>
          <div className="sm:w-1/2">
            <a
              href="http://bvedes.github.io/my-calculator"
              className="p-2 underline hover:no-underline text-blue-600 hover:text-blue-800"
              target="_blank"
            >
              My-Calculator
            </a>
            <img src="/assets/calculator.png" />
          </div>
          <div>
            <div>
              <a
                className="p-2 underline hover:no-underline text-blue-600 hover:text-blue-800"
                href="http://my-library-five.vercel.app"
                target="_blank"
              >
                My-Library
              </a>
              <img src="/assets/library-management-app.png" />
            </div>
            <div className="min-w-1/2" />
          </div>
        </div>
      </div>
      <div className="bg-purple-800 text-white p-4 mt-16">
        <p className="flex justify-center">Coded by Benvinda Vedes</p>
        <p className="flex space-x-4 justify-center"></p>
        <p className="flex justify-center">2021 &copy;</p>
      </div>
    </div>
  );
};
export default Home;
