import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeServices = () => {
    setIsServicesOpen(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    // Close menu when ESC key is pressed
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        closeServices();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <header className='bg-[#0c142c] fixed w-full z-50 py-3'>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center">
            {/* Placeholder for your logo - you can replace this with an image later */}
            <div className="w-40 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded flex items-center justify-center text-white font-bold">
              LOGO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Início Link */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Previne o comportamento padrão do link
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Faz o scroll suave para o topo
              }}
              className={`font-medium transition-colors duration-200 ${isScrolled
                ? 'text-gray-700 hover:text-primary-600'
                : 'text-white hover:text-primary-200'
                }`}
            >
              Início
            </a>


            {/* Serviços Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={toggleServices}
                className={`flex items-center font-medium transition-colors duration-200 cursor-pointer`}
              >
                Serviços
                <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-[-80px] mt-5 w-64 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100">
                  <div className="p-1">
                    <a
                      href="#ai-agents"
                      onClick={closeServices}
                      className="block px-4 py-3 rounded hover:bg-primary-50 transition-colors duration-200"
                    >
                      <div className="font-medium text-black">Agentes de IA</div>
                      <div className="text-sm text-gray-500">Automatização e inteligência para seu negócio</div>
                    </a>

                    <a
                      href="#paid-traffic"
                      onClick={closeServices}
                      className="block px-4 py-3 rounded hover:bg-primary-50 transition-colors duration-200"
                    >
                      <div className="font-medium text-black">Tráfego Pago</div>
                      <div className="text-sm text-gray-500">Estratégias para aumentar sua visibilidade</div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Contato Button */}
            <a
              href="https://wa.me/557192723305"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-7 py-2 rounded-md hover:shadow-md transition-all duration-300 text-black ${isScrolled
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                : 'bg-white text-primary-600 hover:bg-primary-50'
                }`}
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <div className="py-3 px-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#hero"
                className="py-2 text-gray-700 hover:text-primary-600"
                onClick={closeMenu}
              >
                Início
              </a>

              {/* Mobile Services Menu with submenus */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center py-2 w-full text-left text-gray-700 hover:text-primary-600"
                >
                  Serviços
                  <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="pl-4 pt-2 space-y-3">
                    <a
                      href="#ai-agents"
                      className="block py-2 text-gray-600 hover:text-primary-600"
                      onClick={closeMenu}
                    >
                      Agentes de IA
                    </a>

                    <a
                      href="#paid-traffic"
                      className="block py-2 text-gray-600 hover:text-primary-600"
                      onClick={closeMenu}
                    >
                      Tráfego Pago
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="py-2 text-primary-600 font-medium"
                onClick={closeMenu}
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

export default Navbar;
