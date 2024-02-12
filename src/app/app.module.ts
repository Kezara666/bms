import { Toast, ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightSectionComponent } from './common/right-section/right-section.component';
import { LeftSectionComponent } from './common/left-section/left-section.component';
import { HomeComponent } from './common/home/home.component';
import { SampleComponent } from './components/sample/sample.component';
import { ProductsComponent } from './components/products/products.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ExcelExportService, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { registerLicense } from '@syncfusion/ej2-base';
import {ColumnMenuService, SortService, FilterService, PageService } from '@syncfusion/ej2-angular-grids';
import { SupplierComponent } from './components/supplier/supplier.component';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhLYVJ/WmFZfVpgdVRMYl1bR35PMyBoS35RckVhWH1fcXZURWhaV0By');

@NgModule({
  declarations: [

    AppComponent,
    RightSectionComponent,
    LeftSectionComponent,
    HomeComponent,
    SampleComponent,
    ProductsComponent,
    PagenotfoundComponent,
    CategoryComponent,
    SupplierComponent
  ],
  imports: [
    BrowserAnimationsModule, // Ensure only BrowserAnimationsModule is used
    MatSnackBarModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right', // Change this as needed
      closeButton: true,
      preventDuplicates: true,
    }),
    GridModule,
    BrowserModule,

  ],
  providers: [ColumnMenuService, SortService, FilterService, PageService,ExcelExportService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
