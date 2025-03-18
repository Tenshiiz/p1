import { Target, TrendingUp, UsersRound, BarChart2, DollarSign, Lightbulb } from 'lucide-react';


function ServiçosTP() {

    const platforms = [
        {
            name: 'Google Ads',
            description: 'Anúncios estratégicos no maior motor de busca do mundo',
            color: 'bg-red-500',
        },
        {
            name: 'Facebook Ads',
            description: 'Campanhas segmentadas na maior rede social',
            color: 'bg-blue-600',
        },
        {
            name: 'Instagram Ads',
            description: 'Anúncios visuais para engajar seu público-alvo',
            color: 'bg-purple-600',
        },
        {
            name: 'LinkedIn Ads',
            description: 'Alcance profissionais e empresas qualificadas',
            color: 'bg-blue-800',
        },
        {
            name: 'TikTok Ads',
            description: 'Conexão com audiências jovens e engajadas',
            color: 'bg-black',
        },
        {
            name: 'YouTube Ads',
            description: 'Vídeos promocionais na maior plataforma de conteúdo',
            color: 'bg-red-600',
        },
    ];

    const benefits = [
        {
            icon: <Target className="mb-4 text-secondary-500" size={36} />,
            title: 'Segmentação Precisa',
            description:
                'Direcione seus anúncios exatamente para quem tem maior probabilidade de se converter em cliente.',
        },
        {
            icon: <TrendingUp className="mb-4 text-secondary-500" size={36} />,
            title: 'Resultados Mensuráveis',
            description:
                'Acompanhe em tempo real o desempenho de suas campanhas com métricas claras e objetivas.',
        },
        {
            icon: <UsersRound className="mb-4 text-secondary-500" size={36} />,
            title: 'Alcance Ampliado',
            description:
                'Aumente significativamente sua visibilidade e atinja públicos que normalmente não alcançaria.',
        },
        {
            icon: <BarChart2 className="mb-4 text-secondary-500" size={36} />,
            title: 'Otimização Contínua',
            description:
                'Refinamos constantemente suas campanhas para melhorar o desempenho e reduzir o custo por aquisição.',
        },
        {
            icon: <DollarSign className="mb-4 text-secondary-500" size={36} />,
            title: 'Controle de Orçamento',
            description:
                'Defina exatamente quanto deseja investir e ajuste seus gastos conforme os resultados.',
        },
        {
            icon: <Lightbulb className="mb-4 text-secondary-500" size={36} />,
            title: 'Insights Valiosos',
            description:
                'Obtenha dados comportamentais dos usuários para aprimorar suas estratégias de marketing.',
        },
    ];

    return (
        <section id="paid-traffic" className=" px-5 section-padding bg-gray-50 md:px-12 text-black py-20">
            <div className="container-custom">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Tráfego Pago</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-center mb-4 text-lg">Estratégias avançadas de anúncios para atrair clientes qualificados e aumentar suas vendas de forma previsível e escalável.</p>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center">Plataformas que Trabalhamos</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {platforms.map((platform, index) => (
                            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                                <div className={`${platform.color} h-2`}></div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-2">{platform.name}</h4>
                                    <p className="text-gray-600">{platform.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
                    <h3 className="text-2xl font-bold mb-6 text-center">Por que investir em Tráfego Pago?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="text-blue-600 flex justify-center">{benefit.icon}</div>
                                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-700 to-sky-600 text-white rounded-xl p-8 md:p-12">
                    <div className="md:flex items-center">
                        <div className="md:w-3/5 mb-8 md:mb-0 md:pr-12">
                            <h3 className="text-2xl font-bold mb-4">Nossa Abordagem Exclusiva</h3>
                            <p className="mb-4">
                                Combinamos o poder dos dados com a criatividade estratégica para criar campanhas
                                de tráfego pago que realmente convertem. Não nos limitamos a jogar dinheiro em
                                anúncios - desenvolvemos estratégias completas que consideram seu público, mercado,
                                concorrência e objetivos específicos.
                            </p>
                            <p>
                                Nossas campanhas são gerenciadas por especialistas certificados que monitoram cada
                                centavo investido, otimizando constantemente para maximizar seu ROI e garantir que
                                você obtenha o máximo retorno do seu investimento em marketing digital.
                            </p>
                        </div>
                        <div className="md:w-2/5">
                            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                <h4 className="text-xl font-bold mb-4 text-white">Nosso processo em 4 etapas:</h4>
                                <ol className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="bg-white text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 shrink-0">1</span>
                                        <span>Análise profunda do seu negócio, produto e concorrência</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-white text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 shrink-0">2</span>
                                        <span>Criação de estratégia personalizada e segmentação de público</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-white text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 shrink-0">3</span>
                                        <span>Implementação de campanhas e criação de anúncios persuasivos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-white text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 shrink-0">4</span>
                                        <span>Monitoramento contínuo, análise de dados e otimização</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <a href="https://wa.me/557192723305"
                            className="inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white text-blue-700 hover:shadow-lg active:scale-95 active:shadow-none">
                            <span className="flex items-center justify-center">Impulsione seu Negócio agora &rarr;</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiçosTP;
