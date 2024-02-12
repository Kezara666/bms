import { Branch } from "../branch-management/branch";

  // Supplier interface
  export interface ISupplier {
    id: number;
    name?: string;
    shortName?: string;
    address?: string;
    companyRegNo?: string;
    telNo: number;
  
    branchId: number;
    branch?: Branch;
  }
  
  // Supplier class implementing the interface
  export class Supplier implements ISupplier {
    id!: number;
    name?: string;
    shortName?: string;
    address?: string;
    companyRegNo?: string;
    telNo!: number;
  
    branchId!: number;
    branch?: Branch;
  }
  