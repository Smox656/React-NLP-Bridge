import joblib
import re
import string
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

try:
    model = joblib.load('sentiment_model.pkl')
    vectorizer = joblib.load('tfidf_vectorizer.pkl')
    print("✅ Modèle et Vectorizer chargés avec succès !")
except Exception as e:
    print(f"❌ Erreur lors du chargement des fichiers .pkl : {e}")

def clean_review(text):
    text = text.lower()
    text = text.translate(str.maketrans(string.punctuation, ' ' * len(string.punctuation)))
    text = re.sub(r'\s+', ' ', text).strip()
    return text  



@app.route('/predict', methods=['POST'])
def predict():

    data = request.get_json()
    

    if not data or 'review' not in data:
        return jsonify({'error': 'Aucun texte fourni'}), 400
    
    review_text = data['review']
    

    cleaned_text = clean_review(review_text)
    


    text_vectorized = vectorizer.transform([cleaned_text])
    

    prediction = model.predict(text_vectorized)
    probabilities = model.predict_proba(text_vectorized)
    

    return jsonify({
        'prediction': int(prediction[0]),
        'probability': float(max(probabilities[0])),
        'sentiment': 'Positif' if prediction[0] == 1 else 'Négatif'
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)