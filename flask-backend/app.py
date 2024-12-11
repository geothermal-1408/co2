from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
import warnings
warnings.filterwarnings("ignore")

app = Flask(__name__)

df = pd.read_csv("dataset for ml model.csv", encoding='latin-1')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        country = data.get('country')
        mine = data.get('mine')
        filtered_data = df[(df['COUNTRY'] == country) & (df['COAL MINE'] == mine)]
        
        if filtered_data.empty:
            return jsonify({'error': 'No data found for the selected country and mine.'}), 400
        production_columns = [col for col in df.columns if 'PRODUCTION(Mt)' in col]
        production_data = filtered_data[production_columns].iloc[0].astype(float).values
        coal_type_factor = float(filtered_data['Carbon Content'])
        emission_factor = float(filtered_data['Emission Factor'])

        model = ARIMA(production_data, order=(2, 1, 2))  
        model_fit = model.fit()
        predicted_production = model_fit.forecast(steps=1)[0]
        predicted_emissions = predicted_production * (1 - 0.1) * coal_type_factor * emission_factor
        return jsonify({
            'predicted_production': predicted_production,
            'predicted_emissions': predicted_emissions
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
