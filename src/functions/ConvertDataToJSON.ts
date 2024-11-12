import type { ConvertedData } from "../../Types/PurchaseData";
import type { ConvertedPurchaseData } from "src/Types/PurchaseData";
import type { ConvertedSupplierData } from "src/Types/SupplierData";

export default function convertReceptionDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
    receptionID: row[0] !== null ? row[0].toString() : "", // Aseguramos que no sea undefined
    purchaseID: row[1] !== null ? row[1].toString() : "", // Aseguramos que no sea undefined

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
};

export function convertSupplierDataToJSON(data: DBData): ConvertedSupplierData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      supplierID: typeof row[6] === "number" ? row[6] : Number(row[0] ?? 0),
      souvenirID: typeof row[7] === "number" ? row[7] : Number(row[0] ?? 0),
      warehouseID: typeof row[8] === "number" ? row[8] : Number(row[0] ?? 0),
      currencyID: typeof row[9] === "number" ? row[9] : Number(row[0] ?? 0),
    };
  });
};