import bobine from '../assets/bobine.png'

function Header() {
    return (
        <header className="w-full flex items-center justify-center gap-4 py-6 border-b border-slate-800 mb-10">   
            <img 
                src={bobine} 
                alt="Logo" 
                className="w-10 h-10 object-contain" 
            />
            
    
            <h1 className="font-movie text-3xl font-bold text-cyan-400 tracking-tight">
                Movie Review Analyzer
            </h1>

    
            <a 
            href="https://github.com/Smox656" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" text-slate-500 hover:text-cyan-400 transition-colors"
            >
            GitHub Code
            </a>
        </header>
    )
}

export default Header;