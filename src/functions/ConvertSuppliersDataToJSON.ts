import type { ConvertedData } from "@customTypes/suppliersData";

export function convertSouvenirsDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
        supplierID: Number(row[0]),
        legalEntityID: Number(row[1]),
        addressID: Number(row[2]),
        address: row[2] as string,         // Dirección (nombre o detalles)
        phoneNumber: row[3] as string,
        email: row[4] as string,
        statusID: String(row[5]).toLowerCase(),
        statusName: String(row[5]).toLowerCase(),     
    };
  });
};