function ResultDisplay({ score }) {

    const isPositive = score >= 50;
  const barColor = isPositive ? 'bg-cyan-500' : 'bg-rose-500';
  const textColor = isPositive ? 'text-cyan-400' : 'text-rose-400';

  return (
    <div className="w-full max-w-2xl px-4 mt-8 animate-fade-in">
      <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-6 backdrop-blur-md">
        
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-movie text-xl text-slate-300">Analysis Result</h3>
          <span className={`text-4xl font-bold ${textColor}`}>
            {score}%
          </span>
        </div>

        {/* LA JAUGE (Conteneur gris) */}
        <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          {/* LA BARRE (Remplissage de couleur) */}
          <div 
            className={`h-full ${barColor} transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(6,182,212,0.5)]`}
            style={{ width: `${score}%` }}
          />
        </div>

        <p className="mt-4 text-slate-400 text-sm italic text-center">
          {isPositive 
            ? "The audience seems to have enjoyed the experience!" 
            : "The review leans towards a negative sentiment."}
        </p>
      </div>
    </div>
  );
}

export default ResultDisplay;