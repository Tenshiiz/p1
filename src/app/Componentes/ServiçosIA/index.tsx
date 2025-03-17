import { Bot, MessageSquare, Clock, Building, Shield, BrainCircuit } from 'lucide-react';
import Cards from '../Cards';

function ServiçosIA() {

    const features = [
        {
            icon: <MessageSquare className="mb-4 text-primary-500" size={40} />,
            title: 'Atendimento 24/7',
            description:
                'Agentes de IA disponíveis a qualquer hora, oferecendo respostas instantâneas e suporte contínuo para seus clientes.',
        },
        {
            icon: <Clock className="mb-4 text-primary-500" size={40} />,
            title: 'Automação de Processos',
            description:
                'Automatize tarefas repetitivas e fluxos de trabalho, liberando sua equipe para focar no que realmente importa.',
        },
        {
            icon: <Building className="mb-4 text-primary-500" size={40} />,
            title: 'Escalabilidade',
            description:
                'Adapte-se rapidamente às demandas do mercado, ampliando ou reduzindo a utilização dos agentes conforme necessário.',
        },
        {
            icon: <Shield className="mb-4 text-primary-500" size={40} />,
            title: 'Segurança Avançada',
            description:
                'Implementamos rigorosos protocolos de segurança para proteger dados sensíveis e garantir conformidade com regulamentações.',
        },
        {
            icon: <BrainCircuit className="mb-4 text-primary-500" size={40} />,
            title: 'Aprendizado Contínuo',
            description:
                'Nossos agentes de IA melhoram continuamente com base nas interações, tornando-se mais eficientes com o tempo.',
        },
        {
            icon: <Bot className="mb-4 text-primary-500" size={40} />,
            title: 'Personalização Avançada',
            description:
                'Agentes personalizados para refletir a voz e os valores da sua marca, criando experiências únicas para seus clientes.',
        },
    ];

    return (
        <div className="px-5 bg-white text-black py-20 flex justify-center flex-col items-center md:px-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4">Recursos</span>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Agentes de Inteligência Artificial</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-4 text-lg">Revolucione a interação com seus clientes e otimize processos internos com nossos agentes de IA de última geração.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((uriel, index) => (
                    <Cards
                        key={index}
                        icon={uriel.icon}
                        titulo={uriel.title}
                        texto={uriel.description}
                        Align='center'
                    />
                ))}
            </div>
            <div className='mt-12 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-8 md:p-12'>
                <div className='flex flex-col md:flex-row md:items-center'>
                    <div className='md:w-2/3 mb-6 md:mb-0 md:pr-8'>
                        <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                            Como os Agentes de IA podem transformar seu negócio
                        </h3>
                        <p className='text-gray-700 mb-4'>
                            Nossos agentes de IA não são apenas chatbots comuns. São assistentes inteligentes que podem gerenciar várias tarefas simultaneamente, desde fornecer informações detalhadas sobre seus produtos até processar pedidos, agendar compromissos e coletar dados valiosos sobre seus clientes.
                        </p>
                        <p className='text-gray-700'>
                            O resultado? Atendimento ao cliente superior, redução de custos operacionais e insights valiosos para aprimorar sua oferta. Tudo isso enquanto sua equipe se concentra em tarefas estratégicas de alto valor.
                        </p>
                    </div>
                    <div className='md:w-1/3 flex justify-center'>
                        <div className='w-48 h-48 relative'>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill="#1890FF"
                                    d="M40.5,-62.6C52.9,-59.5,63.6,-48.8,70.4,-35.9C77.2,-23,80.2,-7.8,75.7,4.5C71.2,16.8,59.3,26.2,48.4,35.1C37.5,44,27.6,52.4,16.1,56.5C4.5,60.5,-8.6,60.2,-20.5,56.2C-32.4,52.1,-42.9,44.3,-50.4,34.1C-57.9,23.9,-62.4,11.4,-61.7,-0.7C-61,-12.8,-55.1,-24.3,-47.6,-35.1C-40.1,-46,-31,-56.1,-20.3,-59.7C-9.7,-63.3,2.6,-60.3,14.4,-58C26.3,-55.7,38.6,-54.1,40.5,-62.6Z"
                                    transform="translate(100 100)"
                                    opacity="0.1"
                                />
                                <g transform="translate(60, 60)">
                                    <circle cx="40" cy="40" r="30" fill="#1890FF" opacity="0.8" />
                                    <circle cx="30" cy="30" r="4" fill="white" />
                                    <circle cx="50" cy="30" r="4" fill="white" />
                                    <path
                                        d="M25,50 Q40,60 55,50"
                                        stroke="white"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <g transform="translate(10, -5)">
                                        <path
                                            d="M0,0 L15,15 M15,0 L0,15"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                    </g>
                                    <g transform="translate(55, -5)">
                                        <path
                                            d="M0,0 L15,15 M15,0 L0,15"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a
                        href="https://wa.me/557192723305"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 hover:shadow-lg active:scale-95 active:shadow-none transition-colors"
                    >
                        <span className="flex items-center justify-center">Implementar Agentes de IA &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiçosIA;