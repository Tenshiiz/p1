import Image from "next/image";

interface CardsProps {
    imagem: string;
    titulo: string;
    texto: string;
}

function Cards({ imagem, titulo, texto }: CardsProps) {
    return (
        <div className=" max-w-[22.5rem] rounded-lg border border-gray-300 bg-card text-card-foreground shadow-sm overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 xl:w-sm">
            <div className="h-48 ">
                <Image className="w-full h-full object-cover" src={imagem} width={200} height={100} alt={titulo} />
            </div>
            <div className="p-6 h-40">
                <h2 className="text-xl font-semibold mb-3">{titulo}</h2>
                <p className="text-gray-600">{texto}</p>
            </div>
        </div>
    );
}

export default Cards;