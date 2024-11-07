import type { ConvertedData } from "../Types/RecepcionData";
import type { ConvertedPurchaseData } from "src/Types/PurchaseData";

export default function convertReceptionDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
    receptionID: row[0] !== null ? row[0].toString() : "", // Aseguramos que no sea undefined
    purchaseID: row[0] !== null ? row[0].toString() : "", // Aseguramos que no sea undefined
    warehouseID: row[2] as string,
    currencyID: row[3] as string,
    souvenirID: row[4] as string,
    souvenirName: row[6] as string,
    price: row[7] as string,
    supplierID: row[5] as string,
    supplierName: row[8] as string,
    streetName: row[9] as string,
    neighborhood: row[10] as string,
    outsideNumber: row[11] as string,
    postalCode: row[12] as string,
    country: row[13] as string,
    state: row[14] as string,
    city: row[15] as string,
    deliverTo: row[16] as string,
    recepcionDate: null,
    discount: row[17] as string,
    totalChange: row[18] as string,
    description: row[19] as string,
    status: String(row[1]).toLowerCase()
    };
  });
}

export function convertPurchaseDataToJSON(data: DBData): ConvertedPurchaseData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      purchaseID: typeof row[6] === "number" ? row[6] : Number(row[0] ?? 0),
    };
  });
};