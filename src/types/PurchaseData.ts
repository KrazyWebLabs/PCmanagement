export type PurchaseData = {
    purchaseID: string;
    warehouseID: number;
    currencyID: number;
    souvenirID: number;
    souvenirName: string;
    price: number;
    supplierID: number;
    streetName: string;
    neighborhood: string;
    outsideNumber: number;
    postalCode: string;
    country: string;
    state: string;
    city: string;
    deliverTo: string;
    purchaseDate: Date;
    discount: number;
    totalChange: number;
    description: string;
    status: string;
}

export interface ConvertedData {
    purchaseID: string;
    warehouseID: string;
    currencyID: string;
    souvenirID: string;
    souvenirName: string;
    price: string | null;
    supplierID: string;
    streetName: string;
    neighborhood: string;
    outsideNumber: string | null;
    postalCode: string;
    country: string;
    state: string;
    city: string;
    deliverTo: string;
    purchaseDate: string | null;
    discount: string | null;
    totalChange: string | null;
    description: string;
    status: string;
}