export type SuppliersData = {
    supplierID: number;
    legalEntityID: number;
    addressID: number;
    phoneNumber: string;
    email: string;
    statusID: number;
}

export interface ConvertedData {
    supplierID: number;
    legalEntityID: number;
    legalText: string;
    addressID: number;
    address: string;        
    phoneNumber: string;
    email: string;
    statusID: string;
    statusName: string;     
}
