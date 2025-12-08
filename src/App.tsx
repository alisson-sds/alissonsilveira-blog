import { CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BR, US } from 'country-flag-icons/react/3x2'
import foto from './assets/foto.jpg';

function App() {

  return (
    <>
      <nav>
        <div className='flex justify-center gap-16 text-gray-500 text-2xl'>
          <a href="" target="_blank" className='flex text-center justify-center font-inter gap-2 items-center hover:text-gray-300 transition delay-100 '>
            Home
          </a>
          <a href="" target="_blank" className='flex text-center justify-center font-inter gap-2 items-center hover:text-gray-300 transition delay-100'>
            Artigos
          </a>
          <a href="" target="_blank" className='flex text-center justify-center font-inter gap-2 items-center hover:text-gray-300 transition delay-100'>
            Projetos
          </a>
          <a href="" target="_blank" className='flex text-center justify-center font-inter gap-2 items-center hover:text-gray-300 transition delay-100'>
            Sobre mim
          </a>
        </div>
      </nav>
      <div className="p-4 flex w-full">
        <div className=" border-2 border-red-500 w-1/3">
          <img src={foto}></img>
        </div>
        <div className="flex flex-col gap-2 border-2 border-red-500 w-full">
          <div className="flex justify-between">
            <div className="w-full p-2">
              <div className="flex gap-2">
                <BR title="Brasil" className="w-10 border-2 border-gray-400" />
                <US title="Estados Unidos" className="w-10" />
              </div>
              <p className="font-inter text-gray-300 select-none">
                Sobre mim <br /> siofasdfuhasdifuo <br /> asduifhasidoufhsdaiuoh <br /> asduifhasidoufhsdaiuoh <br /> asduifhasidoufhsdaiuoh
              </p>
            </div>
            <div className="flex flex-col text-gray-300 gap-2 select-none p-2">
              <div className="flex gap-2 w-full">
                <p className="text-6xl border border-gray-300 cursor-pointer">
                  Progress
                </p>
                <div className="flex flex-col items-start justify-center text-2xl gap-2 w-full">
                  <p className="border border-gray-300 w-full p-1 cursor-pointer">Next.js</p>
                  <p className="border border-gray-300 w-full p-1 cursor-pointer">Tailwind CSS</p>
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex flex-col items-start justify-center text-2xl gap-2">
                  <p className="border border-gray-300 w-full p-1 cursor-pointer">Java</p>
                  <p className="border border-gray-300 w-full p-1 cursor-pointer">React</p>
                </div>
                <p className="text-6xl border border-gray-300 cursor-pointer">Python</p>
                <div className="flex flex-col items-start justify-center text-2xl gap-2">
                  <p className="border border-gray-300 w-full p-1 cursor-pointer">FastAPI</p>
                  <p className="border border-gray-300 w-full p-1 cursor-pointer">PostgreSQL</p>
                </div>
              </div>
              <div className="flex gap-2 w-full ">
                <div className="flex flex-col items-start justify-center text-2xl gap-2 w-full">
                  <p className="border border-gray-300 w-full p-1 cursor-pointer">Typescript</p>
                  <p className="border border-gray-300 w-full p-1 cursor-pointer">Data Science</p>
                </div>
                <p className="text-6xl border border-gray-300 cursor-pointer">Datasul</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-16 text-gray-300 text-2xl'>
            <a href="https://www.linkedin.com/in/alisson-sds/" target="_blank" className='flex text-center justify-center gap-2 items-center border-2 p-2 font-inter'>
              <CiLinkedin />
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@Alisson-Sds" target="_blank" className='flex text-center justify-center gap-2 items-center border-2 p-2 font-inter'>
              <CiYoutube />
              YouTube
            </a>
            <a href="https://github.com/alisson-sds" target="_blank" className='flex text-center justify-center gap-2 items-center border-2 p-2 font-inter'>
              <FaGithub />
              Github
            </a>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
