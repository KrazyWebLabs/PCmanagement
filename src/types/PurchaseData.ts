export type PurchaseData = {
    purchaseID: number;
    warehouseID: number;
    currencyID: number;
    souvenirID: number;
    souvenirName: string;
    price: number;
    supplierID: number;
    supplierName: number;
    streetName: string;
    neighborhood: string;
    outsideNumber: number;
    postalCode: string;
    country: string;
    state: string;
    city: string;
    deliverTo: string;
    recepcionDate: Date;
    discount: number;
    totalChange: number;
    description: string;
    status: number;
}

export interface ConvertedData {
    purchaseID: string;
    warehouseID: string | null;
    currencyID: string | null;
    souvenirID: string | null;
    souvenirName: string;
    price: string | null;
    supplierID: string | null;
    supplierName: string;
    streetName: string;
    neighborhood: string;
    outsideNumber: string | null;
    postalCode: string;
    country: string;
    state: string;
    city: string;
    deliverTo: string;
    recepcionDate: string | null;
    discount: string | null;
    totalChange: string | null;
    description: string;
    status: string;
}