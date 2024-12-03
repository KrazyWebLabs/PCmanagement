import type { ConvertedReceptionData } from "@customTypes/RecepcionData";
import type { ConvertedData } from "@customTypes/VipCardData";
import type { ConvertedCustomerData } from "@customTypes/CustomersData";
import type { ConvertedPurchaseData } from "src/types/PurchaseData";
import type { ConvertedWarehouseData } from "@customTypes/Warehouse";
import type { ConvertedCurrencyData } from "@customTypes/Currency";
import type { ConvertedSouvenirData } from "@customTypes/SouvenirData";
import type { ConvertedSupplierData } from "@customTypes/SupplierData";
import type { ConvertedEmployeeData } from "@customTypes/EmployeesData";
import type { ConvertedVRAMSData, ConvertedVRASData } from "@customTypes/VRASData";
import type { ConvertedReportedIssueData } from "@customTypes/ReportedIssuesData";

export default function convertReceptionDataToJSON(data: DBData): ConvertedReceptionData[] {
  return data.rows.map((row: (string | number | null | Date)[]) => {
    return {
      receptionID: row[0] ? Number(row[0]) : 0, // Aseguramos que no sea undefined
      purchaseID: row[1] as string, // Aseguramos que no sea undefined

      deliverTo: row[17] as string,
      recepcionDate: row[18] as Date,
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

      statusID: row[22] as string,
      bankAccID: row[23] as string, 
      statusName: String(row[9]).toLowerCase()  
    };
  });
}

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

export function convertWarehouseDataToJSON(data: DBData): ConvertedWarehouseData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      warehouseID: Number(row[0]),
      warehouseName: row[1] as string,
      warehouseAddress: row[2] as string,
      categoryID: Number(row[3]),
      dimensions: Number(row[4]),
      capacity: Number(row[5]),
      temperature: Number(row[6]),
      description: row[7] as string,
      statusID: Number(row[8]),
    };
  });
};

export function convertCurrencyDataToJSON(data: DBData): ConvertedCurrencyData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      currencyID: Number(row[0]),
      currencyName: row[1] as string,
      exchangeRate: Number(row[2]),
      description: row[3] as string,
    };
  });
};

export function convertSouvenirDataToJSON(data: DBData): ConvertedSouvenirData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      souvenirID: Number(row[0]),
      souvenirName: row[1] as string,
      priceWithoutIVA: Number(row[2]),
      IVA: Number(row[3]),
      description: row[4] as string,
      warehouseID: Number(row[5]),
      statusID: Number(row[6]),
    };
  });
};

export function convertSupplierDataToJSON(data: DBData): ConvertedSupplierData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      supplierID: Number(row[0]),
      legalEntityID: Number(row[1]),
      addressID: Number(row[2]),
      phoneNumber: row[3] as string,
      email: row[4] as string,
      statusID: Number(row[5]),
      supplierName: row[6] as string
    };
  });
};

export function convertPurchaseDataToJSON(data: DBData): ConvertedPurchaseData[] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
      purchaseID: Number(row[0]),
      deliverTo: row[1] ? String(row[1]) : "unknown",
      purchaseDate: typeof row[2] === "string" ? row[2] : "invalid date",
      discount: Number(row[3]),
      totalChange: Number(row[4]),
      description: row[5] ? String(row[5]) : "no description",
      warehouseID: Number(row[6]),
      warehouseName: row[7] ? String(row[7]) : "unknown warehouse",
      currencyID: Number(row[8]),
      currencyName: row[9] ? String(row[9]) : "unknown currency",
      souvenirID: row[10] !== null ? Number(row[10]) : -1,
      souvenirName: row[11] ? String(row[11]) : "unknown souvenir",
      productQty: Number(row[16]),
      supplierID: Number(row[12]),
      supplierName: row[13] ? String(row[13]) : "unknown supplier",
      statusID: row[14] !== null ? Number(row[14]) : -1,
      statusName: row[15] ? String(row[15]).toLowerCase() : "unknown status",
    };
  });
}

export function convertEmployeesDataToJSON(data: DBData): ConvertedEmployeeData [] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
      curpID: Number(row[0]),
      employeeID: Number(row[1]),
      fullName: row[2] ? String(row[2]) : "unknown",
    };
  });
}

export function convertReportedIssuesDataToJSON(data: DBData): ConvertedReportedIssueData [] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
      reportedIssueID: Number(row[0]),
      reportedIssue: row[1] ? String(row[1]) : "unknown",
      description: row[2] ? String(row[2]) : "unknown",
    };
  });
}

export function convertVRASDataToJSON(data: DBData): ConvertedVRASData [] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
      serialNumbID: Number(row[0]),
      model: row[1] ? String(row[1]) : "unknown",
    };
  });
}

export function convertFullVRAMToJSON(data: DBData): ConvertedVRAMSData [] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
      vraMaintenanceID: Number(row[0]),
      employeeName: row[1] ? String(row[1]) : "unknown",
      maintenanceDate: row[2] as Date,
      maintenanceTime: row[3] ? String(row[3]) : "unknown",
      maintenanceObservations: row[4] ? String(row[4]) : "unknown",
      maintenanceStatus: row[5] ? String(row[5]) : "unknown",
      vraMaintenanceDetailID: Number(row[6]),
      vraName: row[7] ? String(row[7]) : "unknown",
      urgencyLevel: row[8] ? String(row[8]) : "unknown",
      reportedIssue: row[9] ? String(row[9]) : "unknown",
    };
  });
}

