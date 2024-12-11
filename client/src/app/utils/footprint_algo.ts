export default function evaluateCoalMine(
  coalType: string,
  production: number,
  exclusionFactor: number,
  coalConversionFactor: number,
  co2EmissionsFactor: number
): { emissions: number; messages: string[]; flag: boolean } {
  const messages: string[] = [];
  let flag = false;

  // Calculate emissions
  const emissions =
    (production *
      (1 - exclusionFactor) *
      coalConversionFactor *
      co2EmissionsFactor) /
    1e6;

  // General conditions
  if (production > 15000000) {
    messages.push(
      "The production is too high. It must be reduced to restore the ecosystem and reduce the carbon footprint."
    );
    flag = true;
  }
  if (exclusionFactor > 0.025) {
    messages.push(
      "The exclusion factor is too high. The desired value is 0.017. This factor estimates the fraction of extracted coal not combusted or used for non-combustion purposes."
    );
    flag = true;
  }

  // Handle specific coal types
  if (coalType === "bituminous") {
    if (coalConversionFactor < 25 || coalConversionFactor > 30) {
      messages.push(
        "Coal type conversion factor, which measures energy content per unit of coal, is outside desired levels (25-30 TJ/kt). Suggested actions:- Use coal gasification.- Implement degasification wells and drainage borewells."
      );
      flag = true;
    }
    if (co2EmissionsFactor > 98000) {
      messages.push(
        "Effective CO2 emissions factor exceeds 98,000 CO2/TJ. Suggested actions:- Prioritize mining coal seams with lower intensity.- Optimize rock fragmentation through drilling and blasting to reduce fuel usage in excavators, trucks, and crushers."
      );
      flag = true;
    }
  } else if (coalType === "anthracite") {
    if (coalConversionFactor < 25 || coalConversionFactor > 30) {
      messages.push(
        "Coal type conversion factor, which measures energy content per unit of coal, is outside desired levels (25-30 TJ/kt). Suggested actions:- Use coal gasification.- Implement degasification wells and drainage borewells."
      );
      flag = true;
    }
    if (co2EmissionsFactor > 95000) {
      messages.push(
        "Effective CO2 emissions factor exceeds 95,000 CO2/TJ. Suggested actions:- Prioritize mining coal seams with lower intensity.- Optimize rock fragmentation through drilling and blasting to reduce fuel usage in excavators, trucks, and crushers."
      );
      flag = true;
    }
  } else if (coalType === "lignite") {
    if (coalConversionFactor < 10 || coalConversionFactor > 15) {
      messages.push(
        "Coal type conversion factor, which measures energy content per unit of coal, is outside desired levels (10-15 TJ/kt). Suggested actions:- Use coal gasification.- Implement degasification wells and drainage borewells."
      );
      flag = true;
    }
    if (co2EmissionsFactor > 100000) {
      messages.push(
        "Effective CO2 emissions factor exceeds 100,000 CO2/TJ. Suggested actions:- Prioritize mining coal seams with lower intensity.- Optimize rock fragmentation through drilling and blasting to reduce fuel usage in excavators, trucks, and crushers."
      );
      flag = true;
    }
  } else {
    messages.push(
      "Invalid coal type. Please specify 'bituminous', 'anthracite', or 'lignite'."
    );
    flag = true;
  }

  // Analyze emissions level and append summary messages
  if (flag) {
    if (emissions < 45000000) {
      messages.unshift(
        "The CO2 emissions are within the desired levels. However, to improve sustainability and reduce the carbon footprint, the following issues can be addressed:"
      );
    } else {
      messages.unshift(
        "The CO2 emissions are higher than the desired levels. To improve sustainability and reduce the carbon footprint, the following issues can be addressed:"
      );
    }
  } else {
    messages.push(
      "The CO2 emissions are within the required sustainable levels."
    );
  }

  return { emissions, messages, flag };
}
