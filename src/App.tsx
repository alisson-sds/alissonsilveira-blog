import { CiLinkedin, CiYoutube, CiMail   } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function App() {

  return (
    <>
      <nav>
        <div className='flex justify-center gap-4 text-gray-500 text-2xl'>
          <a href="https://www.linkedin.com/in/alisson-sds/" target="_blank" className='flex text-center justify-center gap-2 items-center'>
            <CiLinkedin  className='text-gray-500'/>
            LinkedIn
          </a>
          <a href="https://www.youtube.com/@Alisson-Sds" target="_blank" className='flex text-center justify-center gap-2 items-center'>
            <CiYoutube   className='text-gray-500'/>
            YouTube
          </a>
          <a href="https://github.com/alisson-sds" target="_blank" className='flex text-center justify-center gap-2 items-center'>
            <FaGithub    className='text-gray-500'/>
            Github
          </a>
        </div>
      </nav>
      
    </>
  )
}

export default App
