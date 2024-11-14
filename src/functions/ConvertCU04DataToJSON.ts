import type { ConvertedData } from "@customTypes/SouvenirsData";

export function convertSouvenirsDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      souvenirID: Number(row[0]),
      souvenirName: row[1] as string,
      priceWithoutIVA: Number(row[2]),
      IVA: Number(row[3]),
      description: row[4] as string,
      warehouseID: row[5] as string  , 
      warehouseName: String(row[8]).toLowerCase()  , 
      statusID: String(row[6]).toLowerCase(),
      statusName: String(row[7]).toLowerCase(),     
    };
  });
};

