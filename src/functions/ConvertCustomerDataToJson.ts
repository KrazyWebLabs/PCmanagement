import type { ConvertedCustomerData } from "@customTypes/CustomersData";
import type { ConvertedStatusData } from "@customTypes/StatusData";
import type { ConvertedAddressesData } from "@customTypes/AddressesData";

export function convertCustomerDataToJSON(data: DBData): ConvertedCustomerData[] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
      customerID: typeof row[0] === "number" ? row[0] : Number(row[0] ?? 0),
      CURP: row[1] as string,
      firstName: row[2] as string,
      paternalLastName: row[3] as string,
      maternalLastName: row[4] as string,
      phoneNumber: row[5] as string,
      Email: row[6] as string,
      RFC: row[7] as string,
      // Aquí es donde mapeas la dirección y el estado
      country: row[12] as string,
      state: row[13] as string,
      city: row[14] as string,
      neighborhood: row[15] as string,
      postalCode: row[16] as string,
      street: row[17] as string,
      outsideNumb: typeof row[18] === "number" ? row[18] : Number(row[18] ?? 0),
      // Asegúrate de que el statusID y el statusName estén bien mapeados
      statusID: String(row[15]).toLowerCase(),
      statusName: String(row[10]).toLowerCase(), // Cambié este índice
      addressID: String(row[11]).toLowerCase(),
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


export function convertAdressesDataToJSON(data: DBData): ConvertedAddressesData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
        addressID: Number(row[0]),
        statusName: row[1] as string,  
        country  : row[8] as string,
        state  : row[3] as string,
        city  : row[4] as string,
        neighborhood  : row[5] as string,
        postalCode  : row[6] as string,
        street  : row[7] as string,
        outsideNumb   : Number(row[8]),    
    };
  });
};