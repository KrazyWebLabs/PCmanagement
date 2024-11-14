import type { ConvertedCustomerData } from "@customTypes/CustomersData";
import type { ConvertedStatusData } from "@customTypes/StatusData";

export function convertCustomerDataToJSON(data: DBData): ConvertedCustomerData[] {
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
      statusID: String(row[9]).toLowerCase(),
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