import type _PurchaseOrderID_ from "src/pages/purchaseOrders/[PurchaseOrderID].astro";
import type { ConvertedPurchaseData } from "src/types/PurchaseData";

export default function convertReceptionDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
    purchaseID: row[1] as string, // Aseguramos que no sea undefined

    deliverTo: row[17] as string,
    recepcionDate: row[18] as null,
    discount: row[19] as string,
    totalChange: row[20] as string,
    description: row[21] as string,
    
    warehouseID: row[2] as string,
    currencyName: row[3] as string,
    souvenirID: row[4] as string,
    supplierID: row[7] as string,
    

    souvenirName: row[5] as string,
    price: row[6] as string,

    supplierEmail: row[8] as string,

    streetName: row[10] as string,
    neighborhood: row[11] as string,
    outsideNumber: row[12] as string,
    postalCode: row[13] as string,
    country: row[14] as string,
    state: row[15] as string,
    city: row[16] as string,

    statusName: String(row[9]).toLowerCase()
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