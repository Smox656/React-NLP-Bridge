import { useState } from 'react'
import Header from './components/Header'
import AnalyzerForm from './components/AnalyzerForm'
import DisplayButton from './components/DisplayButton'
import ResultDisplay from './components/ResultDisplay'

function App() {
  const [review, setReview] = useState("");
  const [score, setScore] = useState(null);

  const startAnalysis = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review: review }), 
      });

      if (!response.ok) {
          throw new Error('Réponse réseau non ok');
      }

      const data = await response.json();


      const calculatedScore = Math.round(data.probability * 100);

      setScore(calculatedScore); 
      
    } catch (error) {
      console.error("Erreur lors de l'appel API:", error);
    }
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