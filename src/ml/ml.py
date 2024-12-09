#this one is also the ml for neutrality and prediction with the time-series analysis(ARIMA) lololol.



import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
import matplotlib.pyplot as plt
import warnings

warnings.filterwarnings("ignore")

df = pd.read_csv("dataset for ml model.csv", encoding = 'latin-1')#path should be change

def preprocess_data(df, country, mine_name):
    
    filtered_data = df[(df['COUNTRY'] == country) & (df['COAL MINE'] == mine_name)]
    
    if filtered_data.empty:
        raise ValueError("No data found for the selected country and mine.")
    
    production_columns = [col for col in df.columns if 'PRODUCTION(Mt)' in col]
    production_data = filtered_data[production_columns].iloc[0].astype(float).values
    
    coal_type_factor = float(filtered_data['Carbon Content'])
    emission_factor = float(filtered_data['Emission Factor'])
    
    return production_data, coal_type_factor, emission_factor, filtered_data

def predict_next_year_production_ts(production_data):
    """
    Predicts next year's coal production using an ARIMA time series model.
    """
    model = ARIMA(production_data, order=(2, 1, 2))  # ARIMA(p=2, d=1, q=2)
    model_fit = model.fit()
    forecast = model_fit.forecast(steps=1)
    predicted_production = forecast[0]
    
    return predicted_production

def calculate_emissions(predicted_production, coal_type_factor, emission_factor, exclusion_factor=0.1):
  
    return predicted_production * (1 - exclusion_factor) * coal_type_factor * emission_factor

def generate_recommendations(predicted_emissions, safe_range=(1000, 3000), mine_type=None, country=None):
    """
    Suggest pathways to carbon neutrality dynamically based on the predicted emissions, mine type, and country.
    """
    recommendations = []

    if predicted_emissions > safe_range[1]:
        deviation = predicted_emissions - safe_range[1]
        
        if deviation > 1000:
            recommendations.append("1. Immediately invest in carbon capture and storage (CCS) technologies.")
            recommendations.append("2. Transition to renewable energy sources like solar, wind, or hydro.")
            recommendations.append("3. Collaborate with international organizations for technology sharing.")
        else:
            recommendations.append("1. Optimize mining operations to reduce energy usage and emissions.")
            recommendations.append("2. Increase efficiency in coal extraction and processing.")
            recommendations.append("3. Implement localized afforestation programs to offset emissions.")
    
    elif predicted_emissions < safe_range[0]:
        recommendations.append("1. Maintain current measures but monitor for any unexpected increases in emissions.")
        recommendations.append("2. Expand renewable energy adoption to maintain low emissions.")
    else:
        recommendations.append("Emissions are within the safe range. Continue monitoring and maintaining efforts.")
    
    if mine_type:
        if "Deep" in mine_type:
            recommendations.append("4. Deploy methane capture systems to reduce CH4 emissions from deep mines.")
        elif "Surface" in mine_type:
            recommendations.append("4. Improve fuel efficiency in surface mining equipment.")
    
    if country:
        recommendations.append(f"5. Leverage {country}'s renewable energy potential for a faster transition to carbon neutrality.")
        recommendations.append("6. Partner with local authorities to implement green technologies in mining operations.")
    
    return recommendations

def assess_emissions(predicted_emissions, safe_range=(1000, 3000)):
    """
    Checks if predicted emissions are within a safe range and returns a status.
    """
    if safe_range[0] <= predicted_emissions <= safe_range[1]:
        return True, "Predicted emissions are within the acceptable range."
    else:
        return False, "Predicted emissions exceed the safe range. Immediate action is required."

def visualize_trends(production_data, predicted_production, predicted_emissions):
   
    years = np.arange(len(production_data))
    future_year = len(production_data)
    
    plt.figure(figsize=(12, 6))
    plt.plot(years, production_data, marker='o', label='Historical Production (Mt)')
    plt.scatter([future_year], [predicted_production], color='red', label='Predicted Production (Next Year)', zorder=5)
    plt.title("Coal Production Trend and Prediction")
    plt.xlabel("Year")
    plt.ylabel("Production (Mt)")
    plt.legend()
    plt.grid(True)
    plt.show()
    
    plt.figure(figsize=(12, 6))
    plt.bar(['Predicted Emissions'], [predicted_emissions], color='orange')
    plt.axhline(3000, color='green', linestyle='--', label='Safe Upper Limit')
    plt.axhline(1000, color='blue', linestyle='--', label='Safe Lower Limit')
    plt.title("Predicted Carbon Emissions")
    plt.ylabel("Carbon Emissions (Mt CO2)")
    plt.legend()
    plt.grid(True)
    plt.show()

def main():
    country = input("Enter the country: ")
    mine_name = input("Enter the coal mine: ")
    mine_type = input("Enter the type of mine (Deep/Surface): ")
    
    try:
        production_data, coal_type_factor, emission_factor, filtered_data = preprocess_data(df, country, mine_name)
        
        predicted_production = predict_next_year_production_ts(production_data)
        print(f"Predicted Coal Production for Next Year: {predicted_production:.2f} Mt")
        
        predicted_emissions = calculate_emissions(predicted_production, coal_type_factor, emission_factor)
        print(f"Predicted Carbon Emissions for Next Year: {predicted_emissions:.2f} Mt CO2")
        
        within_range, status_message = assess_emissions(predicted_emissions)
        print(f"\nStatus: {status_message}")
        
        visualize_trends(production_data, predicted_production, predicted_emissions)
        
        print("\nSuggested Pathways to Carbon Neutrality:")
        recommendations = generate_recommendations(predicted_emissions, mine_type=mine_type, country=country)
        for rec in recommendations:
            print(rec)
    
    except ValueError as e:
        print(e)

main()