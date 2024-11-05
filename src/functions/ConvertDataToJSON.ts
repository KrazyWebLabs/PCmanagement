import type { ConvertedData } from "@customTypes/VipCardData";

export default function convertVIPcardDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      cardNumber: row[0] !== null ? row[0].toString() : "", // Aseguramos que no sea undefined
      email: row[8] as string,
      accountNumber: row[10] ? row[10].toString() : null,
      accountType: (row[11] as string).toLowerCase(),
      currency: row[13] as string,
      bicCode: row[12] as string,
      name: row[2] as string,
      paternalSurname: row[3] as string,
      maternalSurname: row[4] as string,
      rfc: row[6] as string,
      phone: row[7] as string,
      address: row[9] as string,
      birthDate: null, // No se proporciona en los datos originales
      status: (row[1] as string).toLowerCase()
    };
  });
}
