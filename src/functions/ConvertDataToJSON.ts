import type _PurchaseOrderID_ from "src/pages/purchaseOrders/[PurchaseOrderID].astro";
import type { PurchaseData } from "src/types/PurchaseData";

export default function convertReceptionDataToJSON(data: DBData): PurchaseData[] {
  return data.rows.map((row: (string | number | Date |null)[]) => {
    return {
    purchaseID: row[1] as string, // Aseguramos que no sea undefined

    deliverTo: row[17] as string,
    recepcionDate: row[18] as Date,
    discount: row[19] as number,
    totalChange: row[20] as number,
    description: row[21] as string,
    
    warehouseID: row[2] as number,
    currencyName: row[3] as string,
    souvenirID: row[4] as number,
    supplierID: row[7] as number,
    supplierName: row[22] as string,

    souvenirName: row[5] as string,
    price: row[6] as number,

    supplierEmail: row[8] as string,

    streetName: row[10] as string,
    neighborhood: row[11] as string,
    outsideNumber: row[12] as number,
    postalCode: row[13] as string,
    country: row[14] as string,
    state: row[15] as string,
    city: row[16] as string,
    status: row[9] as string
    };
  });
}

export function convertPurchaseDataToJSON(data: DBData): PurchaseData[] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
    purchaseID: row[1] as string,
    deliverTo: row[17] as string,
    recepcionDate: row[18] as Date,
    discount: typeof row[19] === "number" ? row[19] : Number(row[19] ?? 0),
    totalChange: typeof row[20] === "number" ? row[20] : Number(row[20] ?? 0),
    description: row[21] as string,
    
    warehouseID: typeof row[2] === "number" ? row[2] : Number(row[2] ?? 0),
    currencyName: row[3] as string,
    souvenirID: typeof row[4] === "number" ? row[4] : Number(row[4] ?? 0),
    supplierID: typeof row[7] === "number" ? row[7] : Number(row[7] ?? 0),
    supplierName: row [22] as string,
    status: row[9] as string,
    

    souvenirName: row[5] as string,
    price: typeof row[6] === "number" ? row[6] : Number(row[6] ?? 0),

    supplierEmail: row[8] as string,

    streetName: row[10] as string,
    neighborhood: row[11] as string,
    outsideNumber: typeof row[12] === "number" ? row[12] : Number(row[12] ?? 0),
    postalCode: row[13] as string,
    country: row[14] as string,
    state: row[15] as string,
    city: row[16] as string,

    statusName: String(row[9]).toLowerCase()
    };
  });
};