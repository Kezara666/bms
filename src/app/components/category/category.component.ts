import { Component, OnInit, ViewChild } from '@angular/core';
import { Branch, IBranch } from 'src/app/models/branch-management/branch';
import { Category } from 'src/app/models/product-management/product';
import { BranchService } from 'src/app/services/product-managment/branch.service';
import { CategoryService } from 'src/app/services/product-managment/category.service';
import { ToastrService } from 'ngx-toastr';
import { NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditSettingsModel, ExcelExportProperties, FilterSettingsModel, GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  //new category
  category: Category = new Category();

  branches: Branch[] | undefined;
  categories: Category[] | undefined;



  @ViewChild('grid') public grid!: GridComponent;

  public loadingIndicator: any;
  public filterSettings?: FilterSettingsModel;
  public toolbar: ToolbarItems[] = [];
  public data: Object[] = [];
  public editSettings?: EditSettingsModel;

  constructor(private branchService: BranchService, private categoryService: CategoryService, private snackBar: MatSnackBar, private zone: NgZone) { }

  ngOnInit(): void {
    //grid settings

    this.toolbar = ['ExcelExport', 'PdfExport', 'CsvExport'];
    this.editSettings = { allowEditing: true, allowAdding: true, mode: 'Normal' };


    this.branchService.getBranches().subscribe((branches: IBranch[]) => {
      this.branches = branches;
    });

    this.fetchCategories();

  }

  load() {
    const rowHeight: number = this.grid!.getRowHeight();
    const gridHeight: any = this.grid!.height;
    const pageSize: number | undefined = this.grid!.pageSettings.pageSize;
    const pageResize: any = (gridHeight - (pageSize! * rowHeight)) / rowHeight;
    this.grid!.pageSettings.pageSize = pageSize! + Math.round(pageResize);
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

  fetchCategories() {
    this.categoryService.getCategory().subscribe((categories: Category[]) => {
      this.categories = categories;

      this.loadingIndicator = { indicatorType: 'Shimmer' };
      this.filterSettings = { type: 'CheckBox' };// Assuming this method exists and fetches all categories
    });
  }

  onSubmit() {
    this.categoryService.saveCategory(this.category).subscribe(
      (response) => {
        this.category = response;
        // Handle successful response
        this.openSnackBar("Succsess", "Category added succses");
        // Optionally, reset the form or perform other actions

        //tabale data modified
        this.fetchCategories();
      },
      (error) => {
        // Handle error

        this.openSnackBar("Error", "Category unsuccses");
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      // Add additional options here
    });
  }
}
