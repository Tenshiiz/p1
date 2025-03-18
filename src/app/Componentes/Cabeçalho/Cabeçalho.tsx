import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

function Cabeçalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para o dropdown de "Serviços"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Alterna a abertura do dropdown
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Fecha o dropdown
  };

  return (
    <header className='bg-[#0c142c] fixed w-full z-50 py-3'>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className=" h-13 rounded flex items-center justify-center text-white font-bold">
            <h1><Image src={"/imagens/LogoTheNext.png"} width={90} height={100} alt='Logo da TheNext' /></h1>
            <p className='hidden text-2xl ml-[-15px] md:block'>TheNext</p>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Link Início */}
            <a
              href="#"
              className="text-white hover:text-primary-200 font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
            >
              Início
            </a>

            {/* Dropdown Serviços */}
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-primary-200 font-medium transition-colors duration-200 cursor-pointer"
                onClick={toggleDropdown} // Agora é click para abrir/fechar
              >
                Serviços
                <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-[-80px] mt-5 w-64 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100">
                  <div className="p-1">
                    <a
                      href="#ai-agents"
                      className="block px-4 py-3 rounded hover:bg-primary-50 transition-colors duration-200"
                      onClick={() => {
                        closeDropdown(); // Fecha o dropdown ao clicar no link
                      }}
                    >
                      <div className="font-medium text-black">Agentes de IA</div>
                      <div className="text-sm text-gray-500">Automatização e inteligência para seu negócio</div>
                    </a>

                    <a
                      href="#paid-traffic"
                      className="block px-4 py-3 rounded hover:bg-primary-50 transition-colors duration-200"
                      onClick={() => {
                        closeDropdown(); // Fecha o dropdown ao clicar no link
                      }}
                    >
                      <div className="font-medium text-black">Tráfego Pago</div>
                      <div className="text-sm text-gray-500">Estratégias para aumentar sua visibilidade</div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Link Contato */}
            <a
              href="https://wa.me/557192723305"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2 bg-blue-600 text-primary-600 hover:bg-primary-50 rounded-md hover:shadow-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
            >
              Contato
            </a>
          </nav>

          {/* Botão de Menu no Mobile */}
          <button
            className="md:hidden focus:outline-none text-white mr-4"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f1a3a] shadow-lg mt-2 rounded-b-lg">
          <div className="py-4 px-6">
            <nav className="flex flex-col space-y-5">
              <a
                href="#"
                className="py-2 text-white hover:text-primary-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMenuOpen(false); // Fecha o menu ao clicar
                }}
              >
                Início
              </a>

              {/* Mobile Services Dropdown */}
              <div>
                <button className="flex items-center py-2 w-full text-left text-white hover:text-primary-200 font-medium">
                  Serviços
                  <ChevronDown size={16} className="ml-1 transition-transform duration-200" />
                </button>

                <div className="mt-2 space-y-3 bg-[#1a2a57] rounded-lg p-3">
                  <a
                    href="#ai-agents"
                    className="block py-2 px-3 text-white hover:text-primary-200 font-medium rounded-md hover:bg-[#0f1a3a] transition-colors"
                    onClick={(e) => {
                      const target = document.getElementById('ai-agents');
                      if (target) {
                        e.preventDefault();
                        const yOffset = -80;
                        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        setIsMenuOpen(false); // Fecha o menu ao clicar
                      }
                    }}
                  >
                    Agentes de IA
                  </a>

                  <a
                    href="#paid-traffic"
                    className="block py-2 px-3 text-white hover:text-primary-200 font-medium rounded-md hover:bg-[#0f1a3a] transition-colors"
                    onClick={(e) => {
                      const target = document.getElementById('paid-traffic');
                      if (target) {
                        e.preventDefault();
                        const yOffset = -80;
                        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        setIsMenuOpen(false); // Fecha o menu ao clicar
                      }
                    }}
                  >
                    Tráfego Pago
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/557192723305"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 mt-2 bg-blue-600 text-primary-600 font-medium rounded-md text-center hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Cabeçalho;
