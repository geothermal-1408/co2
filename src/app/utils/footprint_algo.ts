// type algo_props ={
//     elctricity : number
//     fuel : number
// }

// export const footprint_algo = (P: algo_props): Promise<number> => {
//     const { elctricity, fuel } = P;

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const result = elctricity * 0.85 + fuel * 2.54;
//             resolve(result);
//         }, 2000);
//     });
// };

function calculateCO2Emissions(
    production: number,
    exclusionFactor: number,
    coalConversionFactor: number,
    co2EmissionsFactor: number
  ): number {
    return (production * (1 - exclusionFactor) * coalConversionFactor * co2EmissionsFactor) / 10 ** 6;
  }
  
  function analyzeEmissions(
    coalType: string,
    production: number,
    exclusionFactor: number,
    coalConversionFactor: number,
    co2EmissionsFactor: number
  ): { messages: string[]; flag: boolean; emissions: number } {
    const emissions = calculateCO2Emissions(production, exclusionFactor, coalConversionFactor, co2EmissionsFactor);
    let messages: string[] = [];
    let flag = false;
  
    if (production > 15000000) {
      messages.push(
        "The production is too high. It must be reduced in order to restore the ecosystem and reduce the carbon footprint."
      );
      flag = true;
    }
  
    if (exclusionFactor > 0.025) {
      messages.push(
        "The exclusion factor, which estimates the fraction of extracted coal that is not ultimately combusted (i.e., lost along the supply chain or used for non-combustion purposes), is too high. The desired value is 0.017."
      );
      flag = true;
    }
  
    if (coalType === "bituminous" && (coalConversionFactor < 25 || coalConversionFactor > 30)) {
      messages.push(
        "Coal type conversion factor is outside the desired range. Suggested steps:\n- Use coal gasification.\n- Employ degasification wells and drainage borewells."
      );
      flag = true;
    }
  
    // Add similar conditions for "anthracite" and "lignite" coal types
  
    return { messages, flag, emissions };
  }
  export default analyzeEmissions