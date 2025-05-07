export default function Header({title}){
    return (
      <header className="bg-green-600 text-white size-auto py-4">
        <div className="container justify-self-center h-[3rem] place-items-center">
          {/* Título à esquerda */}
          <h1 className="text-[2rem] p-[0.5] font-bold ">{title}</h1>
        </div>
      </header>
    );
  };
  