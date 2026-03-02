function DisplayButton({ onClick, disabled }) {
  return (
    <div className="w-full max-w-2xl px-4 mt-6">
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full py-4 px-6 rounded-2xl font-movie text-xl tracking-widest
                   transition-all duration-300 shadow-lg
                   bg-cyan-600 text-white border-b-4 border-cyan-800
                   hover:bg-cyan-500 hover:border-cyan-700 hover:-translate-y-1 active:translate-y-0
                   disabled:bg-slate-700 disabled:border-slate-800 disabled:text-slate-500 
                   disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        {disabled ? "WAITING FOR REVIEW..." : "ANALYZE NOW"}
      </button>
    </div>
  );
}

export default DisplayButton;