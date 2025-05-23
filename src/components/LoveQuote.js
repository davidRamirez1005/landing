const LoveQuote = () => {
  const quotes = [
    "Eres el sueño que nunca quise dejar de soñar",
    "Contigo hasta el último latido",
    "El amor no se cuenta, se siente... y contigo siento todo",
    "Me gustas más que a los gatos las cajas de cartón"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-purple-100 rounded-xl p-6 my-6 shadow-inner">
      <p className="text-purple-900 text-2xl italic text-center">"{randomQuote}"</p>
    </div>
  );
};

export default LoveQuote;