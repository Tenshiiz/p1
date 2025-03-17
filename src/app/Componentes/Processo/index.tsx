import { Check } from 'lucide-react';


function Processo() {
    const steps = [
        {
            number: 1,
            title: 'Análise e Diagnóstico',
            description:
                'Compreendemos profundamente seu negócio, objetivos, público-alvo e o cenário competitivo para identificar as melhores oportunidades.',
            items: [
                'Análise do seu negócio e concorrência',
                'Identificação de oportunidades e desafios',
                'Definição de objetivos claros e mensuráveis',
                'Avaliação de canais e tecnologias adequadas',
            ],
        },
        {
            number: 2,
            title: 'Estratégia Personalizada',
            description:
                'Desenvolvemos um plano estratégico detalhado, combinando agentes de IA e tráfego pago de maneira sinérgica para maximizar resultados.',
            items: [
                'Criação de plano estratégico detalhado',
                'Definição de KPIs de performance',
                'Desenvolvimento de personas e jornadas',
                'Arquitetura da solução tecnológica',
            ],
        },
        {
            number: 3,
            title: 'Implementação',
            description:
                'Colocamos a estratégia em prática, configurando plataformas, lançando campanhas e implementando agentes de IA personalizados.',
            items: [
                'Configuração de plataformas e ferramentas',
                'Criação e treinamento dos agentes de IA',
                'Lançamento de campanhas de tráfego pago',
                'Integração de sistemas e automações',
            ],
        },
        {
            number: 4,
            title: 'Otimização Contínua',
            description:
                'Monitoramos, analisamos e refinamos constantemente nossas estratégias para garantir os melhores resultados possíveis.',
            items: [
                'Monitoramento constante de desempenho',
                'Análise de dados e identificação de padrões',
                'Testes A/B e experimentações controladas',
                'Ajustes estratégicos baseados em resultados',
            ],
        },
    ];

    return (
        <section id="process" className="px-5 bg-white text-black md:px-12 py-20">
            <div className="container-custom">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Nosso Processo</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-center mb-4 text-lg">Conheça nossa metodologia exclusiva para implementar soluções de Agentes de IA e Tráfego Pago que geram resultados consistentes.</p>

                <div className="space-y-12 md:space-y-24 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                                } items-center`}
                        >
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <div
                                    className={`bg-gradient-to-br ${index % 2 === 0
                                        ? 'bg-blue-600'
                                        : 'bg-blue-700'
                                        } text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold`}
                                >
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-600 mb-6">{step.description}</p>
                                <ul className="space-y-3">
                                    {step.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start">
                                            <Check
                                                className={`mr-2 mt-1 shrink-0 ${index % 2 === 0 ? 'text-primary-500' : 'text-secondary-500'
                                                    }`}
                                                size={18}
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="w-full max-w-md">
                                    <svg
                                        viewBox="0 0 400 300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full h-auto"
                                    >
                                        <defs>
                                            <linearGradient
                                                id={`grad-${index}`}
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="100%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor={index % 2 === 0 ? '#1890FF' : '#2F54EB'}
                                                    stopOpacity="0.2"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor={index % 2 === 0 ? '#096DD9' : '#1D39C4'}
                                                    stopOpacity="0.4"
                                                />
                                            </linearGradient>
                                        </defs>
                                        <rect
                                            x="50"
                                            y="50"
                                            width="300"
                                            height="200"
                                            rx="20"
                                            fill={`url(#grad-${index})`}
                                        />

                                        {/* Different illustrations based on the step */}
                                        {step.number === 1 && (
                                            <g transform="translate(100, 90)">
                                                <circle cx="100" cy="60" r="50" fill="none" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" />
                                                <path d="M100 30 L100 75 L125 55" fill="none" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                                <text x="100" y="140" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">Análise e Diagnóstico</text>
                                            </g>
                                        )}

                                        {step.number === 2 && (
                                            <g transform="translate(100, 80)">
                                                <rect x="60" y="20" width="80" height="100" rx="5" fill="none" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" />
                                                <line x1="80" y1="40" x2="120" y2="40" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" strokeLinecap="round" />
                                                <line x1="80" y1="60" x2="120" y2="60" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" strokeLinecap="round" />
                                                <line x1="80" y1="80" x2="120" y2="80" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" strokeLinecap="round" />
                                                <line x1="80" y1="100" x2="120" y2="100" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" strokeLinecap="round" />
                                                <text x="100" y="140" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">Estratégia Personalizada</text>
                                            </g>
                                        )}

                                        {step.number === 3 && (
                                            <g transform="translate(100, 70)">
                                                <polygon points="100,10 150,50 100,90 50,50" fill="none" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" />
                                                <polygon points="100,30 130,50 100,70 70,50" fill={index % 2 === 0 ? "#1890FF" : "#2F54EB"} opacity="0.3" />
                                                <circle cx="100" cy="50" r="10" fill={index % 2 === 0 ? "#1890FF" : "#2F54EB"} />
                                                <text x="100" y="120" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">Implementação</text>
                                            </g>
                                        )}

                                        {step.number === 4 && (
                                            <g transform="translate(75, 70)">
                                                <path d="M60,80 C60,40 140,40 140,80 C140,120 60,120 60,80 Z" fill="none" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" />
                                                <path d="M80,80 L100,60 L120,80" fill="none" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M100,60 L100,100" fill="none" stroke={index % 2 === 0 ? "#1890FF" : "#2F54EB"} strokeWidth="4" strokeLinecap="round" />
                                                <text x="100" y="130" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">Otimização Contínua</text>
                                            </g>
                                        )}
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="px-5 bg-gray-100 rounded-xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold mb-4">Pronto para começar sua transformação digital?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Nosso time de especialistas está pronto para analisar seu negócio e desenvolver uma
                        estratégia personalizada que combina o melhor dos Agentes de IA e do Tráfego Pago para
                        impulsionar seus resultados.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <a href="https://wa.me/557192723305"
                        className="inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 hover:shadow-lg active:scale-95 active:shadow-none transition-colors">
                        <span className="flex items-center justify-center">Solicite uma Consultoria Gratuita &rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Processo;
