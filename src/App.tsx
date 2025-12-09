import { CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BR, US } from 'country-flag-icons/react/3x2'
import foto from './assets/foto.jpg';
import { useState } from "react";


type Lang = 'BR' | 'US';

interface Content {
  text: string;
}

const languageTexts: Record<Lang, Content> = {
  BR: {
    text: "Olá! Este é o texto em Português (BR). A bandeira ativa está ligada ao estado do React. Eu parei de mexer nos seus componentes de bandeira. A funcionalidade agora está focada em atualizar este parágrafo com o clique no seu <BR> ou <US>.",
  },
  US: {
    text: "Hello! This is the text in English (US). The active flag is linked to the React state. I have stopped interfering with your flag components. The functionality is now focused on updating this paragraph when your <BR> or <US> components are clicked.",
  },
};

function App() {

  const [language, setLanguage] = useState<Lang>('BR');

  const currentText = languageTexts[language];

  const handleLanguageChange = (newLang: Lang) => {
    setLanguage(newLang);
  };
  
  const ACTIVE_COLOR = 'border-emerald-400';
  const INACTIVE_BORDER = 'border-gray-700';
  const TEXT_COLOR = 'text-gray-400';
  const TEXT_HOVER_COLOR = 'hover:text-white';
  const BASE_BORDER_CLASS = 'border-2 cursor-pointer transition-all duration-200';
  const BASE_TEXT_CLASS = 'text-gray-400 select-none';

  return (
    <div className="min-h-screen bg-gray-950"> 
      <nav className="pt-4 pb-4 select-none">
        <div className={`flex justify-center gap-16 text-gray-400 text-2xl`}>
          <a href="" target="_blank" className={`flex text-center justify-center font-inter gap-2 items-center ${TEXT_HOVER_COLOR} transition delay-100 `}>
            Home
          </a>
          <a href="" target="_blank" className={`flex text-center justify-center font-inter gap-2 items-center ${TEXT_HOVER_COLOR} transition delay-100`}>
            Artigos
          </a>
          <a href="" target="_blank" className={`flex text-center justify-center font-inter gap-2 items-center ${TEXT_HOVER_COLOR} transition delay-100`}>
            Projetos
          </a>
          <a href="" target="_blank" className={`flex text-center justify-center font-inter gap-2 items-center ${TEXT_HOVER_COLOR} transition delay-100`}>
            Sobre mim
          </a>
        </div>
      </nav>
      <div className="p-8 flex w-full">
        <div className="w-1/3 border select-none">
          <img src={foto} className="w-full h-full object-cover rounded-lg shadow-2xl"></img> 
        </div>
        <div className="flex flex-col gap-4 w-full pl-8"> 
          <div className="flex justify-between">
            <div className="w-full p-2">
              <div className="flex gap-2 mb-4">
                <BR
                  title="Brasil"
                  className={`w-10 ${BASE_BORDER_CLASS} ${language === 'BR' ? ACTIVE_COLOR : INACTIVE_BORDER}`}
                  onClick={() => handleLanguageChange('BR')}
                />
                <US
                  title="Estados Unidos"
                  className={`w-10 ${BASE_BORDER_CLASS} ${language === 'US' ? ACTIVE_COLOR : INACTIVE_BORDER}`}
                  onClick={() => handleLanguageChange('US')}
                />
              </div>
              <p className={`font-inter ${TEXT_COLOR} select-none bg-gray-900 p-4 rounded-lg shadow-inner`}> 
                {currentText.text}
              </p>
            </div>

            <div className={`flex flex-col ${BASE_TEXT_CLASS} gap-2 select-none p-2`}>
              <div className="flex gap-2 w-full">
                <p className={`text-6xl ${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} p-1`}>
                  Progress
                </p>
                <div className="flex flex-col items-start justify-center text-2xl gap-2 w-full">
                  <p className={`${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} w-full p-1`}>Next.js</p>
                  <p className={`${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} w-full p-1`}>Tailwind CSS</p>
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex flex-col items-start justify-center text-2xl gap-2">
                  <p className={`${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} w-full p-1`}>Java</p>
                  <p className={`${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} w-full p-1`}>React</p>
                </div>
                <p className={`text-6xl ${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} p-1`}>Python</p>
                <div className="flex flex-col items-start justify-center text-2xl gap-2">
                  <p className={`${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} w-full p-1`}>FastAPI</p>
                  <p className={`${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} w-full p-1`}>PostgreSQL</p>
                </div>
              </div>
              <div className="flex gap-2 w-full ">
                <div className="flex flex-col items-start justify-center text-2xl gap-2 w-full">
                  <p className={`${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} w-full p-1`}>Typescript</p>
                  <p className={`${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} w-full p-1`}>Data Science</p>
                </div>
                <p className={`text-6xl ${INACTIVE_BORDER} ${BASE_BORDER_CLASS} ${TEXT_HOVER_COLOR} p-1`}>Datasul</p>
              </div>
            </div>
          </div>
          
          <div className={`flex justify-center gap-16 ${TEXT_COLOR} text-2xl select-none`}>
            <a href="https://www.linkedin.com/in/alisson-sds/" target="_blank" 
               className={`flex text-center justify-center gap-2 items-center ${INACTIVE_BORDER} ${BASE_BORDER_CLASS} p-2 font-inter ${TEXT_HOVER_COLOR} hover:${ACTIVE_COLOR}`}>
              <CiLinkedin />
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@Alisson-Sds" target="_blank" 
               className={`flex text-center justify-center gap-2 items-center ${INACTIVE_BORDER} ${BASE_BORDER_CLASS} p-2 font-inter ${TEXT_HOVER_COLOR} hover:${ACTIVE_COLOR}`}>
              <CiYoutube />
              YouTube
            </a>
            <a href="https://github.com/alisson-sds" target="_blank" 
               className={`flex text-center justify-center gap-2 items-center ${INACTIVE_BORDER} ${BASE_BORDER_CLASS} p-2 font-inter ${TEXT_HOVER_COLOR} hover:${ACTIVE_COLOR}`}>
              <FaGithub />
              Github
            </a>
          </div>
        </div>
      </div>
    </div> // Fechamento da div com o novo background
  )
}

export default App