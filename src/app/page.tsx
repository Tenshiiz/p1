"use client";

import Image from "next/image";
import Cabeçalho from "./Componentes/Cabeçalho/Cabeçalho";
import Cards from "./Componentes/Cabeçalho/Cards";

const infos = [
  {
    imagem: "/imagens/walle.jpg",
    titulo: "Automação Inteligente",
    texto: "Automatize tarefas repetitivas e processos complexos com nossos agentes de IA avançados."
  },
  {
    imagem: "/imagens/graficos.jpg",
    titulo: "Otimização de Campanhas",
    texto: "Maximize seu ROI com campanhas de marketing otimizadas por inteligência artificial."
  },
  {
    imagem: "/imagens/reuniao.jpg",
    titulo: "Atendimento 24/7",
    texto: "Suporte contínuo com nossa assistente virtual Luiza, sempre disponível para ajudar."
  }

]

export default function Home() {
  return (
    <div className="">
      <div className="relative h-screen bg-[url('/imagens/background.png')] bg-cover bg-center px-7 py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/75" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <header className="relative z-10">
          <Cabeçalho />
        </header>
        <div className="relative h-screen z-10 flex flex-col justify-center items-center md:mt-[-50px] lg:block lg:mt-[50px]">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-purple-600 rounded-full mb-4">
              🏆 Inovação em Inteligência Artificial
            </span>
          <div className="flex">
            <div className="max-w-2xl flex flex-col justify-center items-center text-center lg:text-left lg:block">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Transforme seu Negócio com os nossos <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Agentes de IA</span></h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">Automatize processos, otimize campanhas e revolucione seu atendimento ao cliente com nossa plataforma de IA avançada.</p>
              <button
                className=" w-full py-3 px-4 bg-sky-700 cursor-pointer lg:w-64 rounded-xl hover:bg-sky-800 transition-all"
                onClick={() => window.open('https://wa.me/SeuNumeroAqui', '_blank')}
              >
                Entrar em contato
              </button>
            </div>
            <div className="hidden xl:block">
              <Image className="mr-3 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
                src={"/imagens/AI-ajustado.png"}
                width={600}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Sessão Serviços */}
      <div className="bg-white text-black py-20 flex justify-center flex-col items-center">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4">Recursos</span>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Tecnologia de Ponta para seu Negócio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-4">Nossa plataforma combina tecnologia avançada com soluções práticas para impulsionar seu negócio no mundo digital.</p>
        <div className="flex flex-wrap justify-center gap-4 md:px-8 md:gap-10 md:flex-nowrap">
          {infos.map((uriel, index) => (
            <Cards
              key={index}
              imagem={uriel.imagem}
              titulo={uriel.titulo}
              texto={uriel.texto}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
