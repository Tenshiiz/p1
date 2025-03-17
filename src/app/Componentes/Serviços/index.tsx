import Cards from "../Cards";
import { Zap, TrendingUp, Search, Users, BarChart, Layers } from 'lucide-react';

function Serviços() {

    const services = [
        {
            icon: <Zap size={32} />,
            title: 'Agentes de IA',
            description:
                'Automatize processos e melhore o atendimento ao cliente com agentes inteligentes que trabalham 24/7.',
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Tráfego Pago',
            description:
                'Estratégias personalizadas de anúncios online para atrair clientes qualificados e aumentar suas conversões.',
        },
        {
            icon: <Search size={32} />,
            title: 'Otimização para Busca',
            description:
                'Melhore seu posicionamento nos motores de busca e seja encontrado pelos clientes certos.',
        },
        {
            icon: <Users size={32} />,
            title: 'Gestão de Redes Sociais',
            description:
                'Construa uma presença sólida nas principais redes sociais com conteúdo estratégico e campanhas de engajamento.',
        },
        {
            icon: <BarChart size={32} />,
            title: 'Análise de Dados',
            description:
                'Transforme dados em insights acionáveis para tomar decisões mais inteligentes e orientadas por resultados.',
        },
        {
            icon: <Layers size={32} />,
            title: 'Estratégia Digital Completa',
            description:
                'Combinação estratégica de todos os nossos serviços para maximizar seus resultados online.',
        },
    ];

    return (
        <div className="px-5 bg-white text-black py-20 flex justify-center flex-col items-center md:px-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4">Recursos</span>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-4 text-lg">Soluções completas para alavancar seu negócio no ambiente digital. Conheça nossos serviços especializados e descubra como podemos ajudar você a alcançar seus objetivos.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((uriel, index) => (
                    <Cards
                        key={index}
                        icon={uriel.icon}
                        titulo={uriel.title}
                        texto={uriel.description}
                    />
                ))}
            </div>
            <div className="mt-16 text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                    Precisa de uma solução personalizada para seu negócio? Entre em contato conosco para uma consultoria gratuita.
                </p>
                <a href="https://wa.me/557192723305"
                    className="inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 hover:shadow-lg active:scale-95 active:shadow-none transition-colors">
                    <span className="flex items-center justify-center">Solicitar Consultoria &rarr;</span>
                </a>
            </div>
        </div>
    )
}

export default Serviços;