interface CardsProps {
    icon: React.ReactNode;
    titulo: string;
    texto: string;
    Align?: string // nova prop para controlar o alinhamento
}

function Cards({ icon, titulo, texto, Align = 'left' }: CardsProps) {
    return (
        <div className="text-center border-x-1 border-gray-200 bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1">
            <div className={`flex text-blue-600 mb-4 ${Align === 'center' ? 'justify-center' : 'justify-left'}`}>
                {icon}
            </div>
            <div>
                <h2 className="text-xl font-bold mb-3">{titulo}</h2>
                <p className="text-gray-600 mb-4">{texto}</p>
            </div>
        </div>
    );
}

export default Cards;
