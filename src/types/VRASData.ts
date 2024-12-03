export interface ConvertedVRASData {
  serialNumbID: number;
  model: string;
}

export interface ConvertedVRAMSData {
  vraMaintenanceID: number;
  employeeName: string;
  maintenanceDate: Date;
  maintenanceTime: string;
  maintenanceObservations: string;
  maintenanceStatus: string;
  vraMaintenanceDetailID: number;
  vraName: string;
  urgencyLevel: string;
  reportedIssue: string;
}
