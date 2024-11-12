import type { ConvertedData } from "@customTypes/VipCardData";
import type { ConvertedCustomerData } from "@customTypes/CustomersData";

export function convertVIPcardDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      customerID: Number(row[15]), // Aseguramos que sea número
      cardNumber: Number(row[0]), // Convertimos a número
      email: row[7] as string,
      accountNumber: row[15] ? Number(row[15]) : 0, // Aseguramos que sea número
      accountType: String(row[10]), // Convertimos a string
      currency: row[13] ? String(row[13]) : null,
      bicCode: row[11] as string | null,
      name: row[1] as string,
      paternalSurname: row[2] as string,
      maternalSurname: row[3] as string,
      rfc: row[5] as string,
      phone: Number(row[6]), // Convertimos a número
      address: String(row[8]), // Convertimos a string
      status: String(row[14]).toLowerCase(), // Convertimos a string
    };
  });
};

export function convertCustomersDataToJSON(data: DBData): ConvertedCustomerData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      customerID: typeof row[6] === "number" ? row[6] : Number(row[0] ?? 0),
    };
  });
};
