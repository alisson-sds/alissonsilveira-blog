import { CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

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
        <div className=" border-2 border-red-500">
          Minha foto
        </div>
        <div className=" border-2 border-red-500 w-full">
          <div className="flex">
            <div>
              <p className="">
                Sobre mim <br /> siofasdfuhasdifuo <br /> asduifhasidoufhsdaiuoh <br /> asduifhasidoufhsdaiuoh <br /> asduifhasidoufhsdaiuoh
              </p>
            </div>
            <div>
              <p>
                Progress <br /> Python <br /> Java <br /> React <br /> Next
              </p>
            </div>
          </div>
          <div className='flex justify-center gap-4 text-gray-500 text-2xl'>
            <a href="https://www.linkedin.com/in/alisson-sds/" target="_blank" className='flex text-center justify-center gap-2 items-center border-2 p-2 font-inter'>
              <CiLinkedin className='text-gray-500' />
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@Alisson-Sds" target="_blank" className='flex text-center justify-center gap-2 items-center border-2 p-2 font-inter'>
              <CiYoutube className='text-gray-500' />
              YouTube
            </a>
            <a href="https://github.com/alisson-sds" target="_blank" className='flex text-center justify-center gap-2 items-center border-2 p-2 font-inter'>
              <FaGithub className='text-gray-500' />
              Github
            </a>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
