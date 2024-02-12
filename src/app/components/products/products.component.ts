import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditSettingsModel, ExcelExportProperties, FilterSettingsModel, GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Branch, IBranch } from 'src/app/models/branch-management/branch';
import { Category, Product } from 'src/app/models/product-management/product';
import { Supplier } from 'src/app/models/supplier-management/supplier';
import { BranchService } from 'src/app/services/product-managment/branch.service';
import { CategoryService } from 'src/app/services/product-managment/category.service';
import { ProductService } from 'src/app/services/product-managment/product.service';
import { SupplierService } from 'src/app/services/supplier-managment/supplier.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product = new Product();
  public suppliers: Supplier[] | undefined;
  public supplier: Supplier = new Supplier();
  branches: Branch[] | undefined;
  categories: Category[] | undefined;
  products: Product[] | undefined;


  
  public loadingIndicator: any;
  public filterSettings?: FilterSettingsModel;
  public toolbar: ToolbarItems[] = [];
  public data: Object[] = [];
  public editSettings?: EditSettingsModel;
  @ViewChild('grid') public grid!: GridComponent;

  constructor(private categoryService: CategoryService, private branchService: BranchService, private supplierService: SupplierService, private snackBar: MatSnackBar,private productService :ProductService ) { }

  ngOnInit(): void {

    this.toolbar = ['ExcelExport', 'PdfExport', 'CsvExport'];
    this.editSettings = { allowEditing: true, allowAdding: true, mode: 'Normal' };

    this.fetchProducts();
    this.fetchSuppliers();
    this.fetchBranch();
    this.fetchCategories();
  }
  fetchProducts() {
    this.productService.getProduct().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
  onSubmit() {
    this.productService.saveProduct(this.product).subscribe(
      (response) => {
        this.product = response;
        // Handle successful response
        this.openSnackBar("Succsess", "Category added succses");
        // Optionally, reset the form or perform other actions

        //tabale data modified
        this.fetchSuppliers();
      },
      (error) => {
        // Handle error

        this.openSnackBar("Error", "Category unsuccses");
      }
    );

  };


  fetchSuppliers() {
    this.supplierService.getSuppliers().subscribe((suppliers: Supplier[]) => {

      this.suppliers = suppliers;
    });
  }


  fetchCategories() {
    this.categoryService.getCategory().subscribe((categories: Category[]) => {
      this.categories = categories;


      // this.loadingIndicator = { indicatorType: 'Shimmer' };
      // this.filterSettings = { type: 'CheckBox' };// Assuming this method exists and fetches all categories
    });
  }


  fetchBranch() {
    this.branchService.getBranches().subscribe((branches: IBranch[]) => {
      this.branches = branches;
    });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      // Add additional options here
    });
  }


  toolbarClick(args: ClickEventArgs): void {
    const gridExcelId = args.item.text;
    if (args.item.text === 'Excel Export') {
      const excelExportProperties: ExcelExportProperties = {
        fileName: 'Designation.xlsx'
      };
      this.grid.excelExport(excelExportProperties);
    }
    else if (args.item.text === 'PDF Export') {
      this.grid.pdfExport();
    }
    else if (args.item.text === 'CSV Export') {
      this.grid.csvExport();
    }
  }
}
