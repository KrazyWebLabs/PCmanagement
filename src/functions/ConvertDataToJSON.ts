import type { ConvertedData } from "@customTypes/SouvenirsData";

export function convertSouvenirsDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      souvenirID: Number(row[15]),
      souvenirName: row[70] as string,
      priceWithoutIVA: Number(row[10]),
      IVA: Number(row[5]),
      priceWithIVA: Number(row[6]),
      description: row[100] as string,
      warehouseID: String(row[14]).toLowerCase()  , 
      statusID: String(row[14]).toLowerCase(),    
    };
  });
};