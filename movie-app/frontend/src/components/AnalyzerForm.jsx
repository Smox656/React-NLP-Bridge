import { useState } from 'react'

function AnalyzerForm({review, setReview}) {

  return (
    <div className="w-full max-w-2xl mt-4 px-4">
 
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 shadow-2xl">
        
        <label className="block text-slate-400 text-sm font-medium mb-4 ml-1 tracking-widest uppercase">
          Movie Review Input
        </label>


        <textarea
          className="w-full h-64 p-5 rounded-2xl bg-slate-900/80 text-slate-100 border border-slate-700 
                     focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none 
                     transition-all resize-none font-sans text-lg shadow-inner"
          placeholder="Describe your cinematic experience here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="flex justify-end mt-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                Character count: {review.length}
            </span>
        </div>
      </div>
    </div>
  )
}

export default AnalyzerForm;