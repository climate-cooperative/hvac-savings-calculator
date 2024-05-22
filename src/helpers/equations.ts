function getConversionFactor(conversionType: string, grid_carbon_intensity: number) {
    const conversionFactors: {[key: string]: number} = {
        'Electric': grid_carbon_intensity,
        'Propane': 0.000139,
        'Fuel Oil': 0.000163,
        'Natural Gas': 0.000117,
        'Bio Fuel': 0.000239
    };
    return conversionFactors[conversionType];
}

export {
    getConversionFactor
};