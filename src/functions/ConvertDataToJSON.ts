import type _PurchaseOrderID_ from "src/pages/purchaseOrders/[purchaseOrderID].astro";
import type { PurchaseData } from "src/types/PurchaseData";

export default function convertReceptionDataToJSON(data: DBData): PurchaseData[] {
  return data.rows.map((row: (string | number | Date |null)[]) => {
    return {
    purchaseID: row[0] as string, // Aseguramos que no sea undefined

    deliverTo: row[1] as string,
    purchaseDate: row[2] as Date,
    discount: row[3] as number,
    totalChange: row[4] as number,
    description: row[5] as string,
    
    warehouseID: row[6] as number,
    currencyName: row[7] as string,
    currencyID: row[7] as number,
    souvenirID: row[9] as number,
    supplierID: row[9] as number,
    supplierName: row [9] as string,

    souvenirName: row[5] as string,
    //Hacer un JOIN para obtener el souvenir name
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
    //Crear una vista con los campos necesarios para la orden de compra haciendo el JOIN a suppliers, status, souvenirs, legalEntities, adresses. 
    };
  });
}

export function convertPurchaseDataToJSON(data: DBData): PurchaseData[] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
    purchaseID: row[0] as string,
    deliverTo: row[1] as string,
    purchaseDate: row[2] as Date,
    discount: typeof row[3] === "number" ? row[3] : Number(row[3] ?? 0),
    totalChange: typeof row[4] === "number" ? row[4] : Number(row[4] ?? 0),
    description: row[5] as string,
    
    warehouseID: typeof row[6] === "number" ? row[6] : Number(row[6] ?? 0),
    currencyName: row[7] as string,
    currencyID: row[7] as number,
    souvenirID: typeof row[4] === "number" ? row[4] : Number(row[4] ?? 0),
    supplierID: typeof row[9] === "number" ? row[9] : Number(row[9] ?? 0),
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