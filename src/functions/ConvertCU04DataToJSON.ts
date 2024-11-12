import type { ConvertedData } from "@customTypes/SouvenirsData";

export function convertSouvenirsDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      souvenirID: Number(row[0]),
      souvenirName: row[1] as string,
      priceWithoutIVA: Number(row[2]),
      IVA: Number(row[3]),
      priceWithIVA: Number(row[4]),
      description: row[5] as string,
      warehouseID: String(row[6]).toLowerCase()  , 
      warehouseName: String(row[7]).toLowerCase()  , 
      statusID: String(row[9]).toLowerCase(),
      statusName: String(row[9]).toLowerCase(),     
    };
  });
};

