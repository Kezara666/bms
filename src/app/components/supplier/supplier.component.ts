import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditSettingsModel, ExcelExportProperties, FilterSettingsModel, GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Branch, IBranch } from 'src/app/models/branch-management/branch';
import { Supplier } from 'src/app/models/supplier-management/supplier';
import { BranchService } from 'src/app/services/product-managment/branch.service';
import { SupplierService } from 'src/app/services/supplier-managment/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  public suppliers: Supplier[] | undefined;
  public supplier: Supplier = new Supplier();
  branches: Branch[] | undefined;


  public loadingIndicator: any;
  public filterSettings?: FilterSettingsModel;
  public toolbar: ToolbarItems[] = [];
  public data: Object[] = [];
  public editSettings?: EditSettingsModel;
  @ViewChild('grid') public grid!: GridComponent;

  constructor(private branchService: BranchService, private supplierService: SupplierService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.toolbar = ['ExcelExport', 'PdfExport', 'CsvExport'];
    this.editSettings = { allowEditing: true, allowAdding: true, mode: 'Normal' };

    this.branchService.getBranches().subscribe((branches: IBranch[]) => {
      this.branches = branches;
    });

    this.fetchSuppliers();
  }

  fetchSuppliers() {
    this.supplierService.getSuppliers().subscribe((suppliers: Supplier[]) => {
      console.log(suppliers);
      this.suppliers = suppliers;

      this.loadingIndicator = { indicatorType: 'Shimmer' };
      this.filterSettings = { type: 'CheckBox' };
    });
  }

  onSubmit() {
    this.supplierService.saveSuppliers(this.supplier).subscribe(
      (response) => {
        this.supplier = response;
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



  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      // Add additional options here
    });
  }

}
