/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Slider from '../components/Slider';
import avatar from '../public/avatar.png';
const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={ darkMode? "dark" : "" }>
      <Head>
        <title>Robson Miranda</title>
        <meta name='description' content=''/>
        <link rel='' />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">

        <section className="min-h-screen">
          <nav className="py-2 mb-12 flex flex-row dark:bg-gray-900 justify-end fixed w-[75%] rounded-md bg-gray-50 opacity-80 pr-2">
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" 
                onClick={() => setDarkMode(!darkMode)}/>  
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-1.5 rounded-md ml-8" href="https://www.linkedin.com/in/robson-mn/" target='_blank'>Linked-in</a>
              </li> 
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-200">Robson Miranda</h2>
            <h3 className="text-2xl py-2 dark:text-slate-200">Desenvolvedor Web</h3>
            <p className="text-md py-5 leading-8 dark:text-white text-gray-800 lg:max-w-xl mx-auto">
              Olá, meu nome é <span className="text-teal-500">Robson</span>, estudante do curso de Desenvolvimento Web Full Stack da Trybe, atualmente em processo de transição de carreira.
              Formado em Administração pela Fundação Escola de Comércio Alvares Penteado (FECAP), com background na área de Valuation(avaliação de ativos).
              Experiência profissional mais recente em multinacional &quot;Big Four&quot; da área de consultoria e auditoria,
              onde pude desenvolver habilidades importantes como gestão de tempo, análise de dados, capacidade de trabalhar em múltiplos projetos simultâneos.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-white">
            <a href="https://github.com/robsm36" target='_blank'>
              <AiFillGithub className="hover:text-teal-300"/>
            </a>
            <a href="https://www.linkedin.com/in/robson-mn/" target='_blank'>
              <AiFillLinkedin className="hover:text-teal-300"/>
            </a>
          </div>
            <a href="https://www.linkedin.com/in/robson-mn/" target='_blank'>
              <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden transition ease-in-out delay-150 transform hover:shadow-xl hover:scale-105 duration-300 cursor-pointer text-2xl">
                <Image src={avatar} fill alt="img" style={{objectFit:"cover"}}/>
              </div>
            </a>
        </section>

        <section>
          <div className="text-center p-10">
            <h3 className="text-3xl py-1 dark:text-teal-200">O que busco</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
              Tenho aprendido nos últimos 12 meses tecnologias como JavaScript, React, Next.js, TypeScript, CSS, Tailwind, Node.js, Docker, SQL e NoSQL, 
              Testes, Git & GitHub, dentre outros tópicos de conhecimento e stacks relevantes para a formação de um desenvolvedor web. Busco uma primeira 
              experiência profissional no desenvolvimento front ou back-end.
            </p>
          </div>
        </section>

         <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-200 text-center">Portfólio</h3>
            <p className="text-md px-4 pb-10 leading-2 text-gray-800 dark:text-gray-200 text-center">
              Alguns projetos desenvolvidos por mim. Passe o cursor sobre a imagem abaixo para
              ativar os comandos de interação. As aplicações estão hospedadas e possuem repositório
              no GitHub. Para acessar, clique nos botões correspondentes abaixo .
            </p>
          </div>
          <Slider/>
        </section>

      </main> 
    </div>
  )
}

