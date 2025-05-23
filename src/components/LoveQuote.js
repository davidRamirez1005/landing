const LoveQuote = () => {
  const quotes = [
    "Eres el detalle inesperado que hace especial mi día",
    "Hay personas que suman, pero tú multiplicas",
    "Tu sonrisa tiene el poder de desordenar mis pensamientos",
    "Me encantas como los gatos aman las cajas de cartón"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-purple-100 rounded-xl p-6 my-6 shadow-inner">
      <p className="text-purple-900 text-2xl italic text-center">"{randomQuote}"</p>
    </div>
  );
};

export default LoveQuote;
