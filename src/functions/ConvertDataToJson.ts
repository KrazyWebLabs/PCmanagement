import type { ConvertedData } from "@customTypes/Customers";

export function convertCustomerDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
      customerID: typeof row[6] === "number" ? row[6] : Number(row[0] ?? 0),
      CURP: row[1] as string,
      firstName: row[2] as string,
      paternalLastName: row[3] as string,
      maternalLastName: row[4] as string,
      phoneNumber: row[5] as string,
      Email: row[6] as string,
      RFC: row[7] as string,
      address: String(row[8]).toLowerCase(),
      status: String(row[9]).toLowerCase(),
    };
  });
};