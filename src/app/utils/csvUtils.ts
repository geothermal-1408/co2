import Papa from "papaparse";

export const readCsvData = async (filePath: string) => {
  const response = await fetch(filePath);
  const csvData = await response.text();
  const parsedData = Papa.parse(csvData, { header: true });
  return parsedData.data; // Returns an array of objects
};
