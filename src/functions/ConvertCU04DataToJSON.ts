import type { ConvertedData } from "@customTypes/SouvenirsData";
import type { ConvertedWarehouseData } from "@customTypes/WarehousesData";
import type { ConvertedStatusData } from "@customTypes/StatusData";

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

export function convertWarehousesDataToJSON(data: DBData): ConvertedWarehouseData[]{
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      warehouseID: Number(row[0]),
      warehouseName: row[1] as string,    
    };
  });
};

export function convertStatusDataToJSON(data: DBData): ConvertedStatusData[]{
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      statusID: Number(row[0]),
      statusName: row[1] as string,    
    };
  });
};