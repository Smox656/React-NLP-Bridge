import { useState } from 'react'
import Header from './components/Header'
import AnalyzerForm from './components/AnalyzerForm'
import DisplayButton from './components/DisplayButton'
import ResultDisplay from './components/ResultDisplay'

function App() {
  const [review, setReview] = useState("");
  const [score, setScore] = useState(null);

  const startAnalysis = () => {
    const randomScore = Math.floor(Math.random() * 100);
    setScore(randomScore);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center p-10">
      <Header />
      <AnalyzerForm review={review} setReview={setReview} />
      <DisplayButton onClick={startAnalysis} disabled={review.trim().length === 0} />

      {score !== null && <ResultDisplay score={score} />}
    </div>
  )
}

export default App;