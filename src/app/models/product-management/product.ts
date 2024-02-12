// Adjust the path accordingly

import { Branch } from "../branch-management/branch";
import { Supplier } from "../supplier-management/supplier";

// Interface for Product
export interface IProduct {
    id: number;
    name: string;
    productCode: number;
    barCode: number;
    alcholPresent: number;
    bottleCount: number;
    bottleHaveMililiter: number;
    categoryId: number;
    category?: Category;
    supplierId: number;
    supplier?: Supplier;
    branchId: number;
    branch?: Branch;
    emptyPrice: number;
    sellingPrice: number;
    buyerPrice: number;
}

// Product class implementing the interface
export class Product implements IProduct {
    id!: number;
    name!: string;
    productCode!: number;
    barCode!: number;
    alcholPresent!: number;
    bottleCount: number = 0;
    bottleHaveMililiter: number = 0;
    categoryId!: number;
    category?: Category;
    supplierId!: number;
    supplier?: Supplier;
    branchId!: number;
    branch?: Branch;
    emptyPrice: number = 0;
    sellingPrice: number = 0;
    buyerPrice: number = 0;
}

// Category class
export class Category {
    id!: number;
    name!: string;
    branchId!: number;
    branch?: Branch;
}
