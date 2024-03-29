import React,{useEffect} from 'react'
import Sandesh from '../assets/projects/portfolio.png'
import Gist from '../assets/projects/Portfolio 2.0.png'
import Chatbot from '../assets/projects/calling jadoo.png'
import Ide from '../assets/projects/clock p2.png'
import ShopEasy from '../assets/projects/Typing Test.png'
import Upscale from '../assets/projects/For My Love.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Sandesh,
      desc: "React Portfolio 1.0",
      demo: "https://portfolio-react-js-alpha.vercel.app/",
      code: "https://github.com/arpit080/Portfolio-React-js"
    },
    {
      id: 2,
      src: ShopEasy,
      desc: "Typing Tes Project 1",
      demo: "https://typing-test-project-1.vercel.app/",
      code: "https://github.com/arpit080/Typing-Test-Project-1"
    },
    {
      id: 3,
      src: Chatbot,
      desc: "Calling Jadoo by HTML,CSS and JS",
      demo: "https://calling-jadoo-in-2024-lyart.vercel.app/",
      code: "https://github.com/arpit080/Calling-jadoo-in-2024"
    },
    {
      id: 4,
      src: Ide,
      desc: "Clock Project 2",
      demo: "https://clock-project-2.vercel.app/",
      code: "https://github.com/arpit080/Clock-Project-2"
    },
    {
      id: 5,
      src: Upscale,
      desc: "For My love",
      demo: "https://for-my-love-xi.vercel.app/",
      code: "https://github.com/arpit080/For-My-Love"
    },
    {
      id: 6,
      src: Gist,
      desc: "React Portfolio 2.0",
      demo: "https://portfolio-react-2-0-mauve.vercel.app/",
      code: "https://github.com/arpit080/Portfolio-React-2.0"
    },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
