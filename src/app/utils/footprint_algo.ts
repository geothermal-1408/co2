type algo_props ={
    elctricity : number
    fuel : number
}

export const footprint_algo = (P: algo_props): Promise<number> => {
    const { elctricity, fuel } = P;

    return new Promise((resolve) => {
        setTimeout(() => {
            const result = elctricity * 0.85 + fuel * 2.54;
            console.log("Calculated result:", result); // Debugging log
            resolve(result);
        }, 2000);
    });
};
