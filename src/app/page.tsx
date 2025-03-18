"use client";

import { Inter } from 'next/font/google'
import Image from "next/image";
import Serviços from "./Componentes/Serviços";
import ServiçosIA from './Componentes/ServiçosIA';
import ServiçosTP from './Componentes/ServiçosTP';
import Processo from './Componentes/Processo';
import Cabeçalho from './Componentes/Cabeçalho/Cabeçalho';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Cabeçalho isScrolled={false} />
      <div className="relative h-screen bg-[url('/imagens/background.png')] bg-cover bg-center px-7 py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/75" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>


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
                onClick={() => window.open('https://wa.me/557192723305', '_blank')}
              >
                Entrar em contato
              </button>
            </div>
            <div className="hidden xl:block">
              <Image className="mr-3 rounded-2xl z-0 shadow-2xl border border-white/10 backdrop-blur-sm"
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
      <Serviços />
      {/* Sub Sessão serviços de IA */}
      <ServiçosIA />
      {/* Sub Sessão Serviços Trafego Pago */}
      <ServiçosTP />
      {/* Processo */}
      <Processo />
    </div>
  );
}
