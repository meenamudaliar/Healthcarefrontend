import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MedicineGridComponent } from './medicine-grid/medicine-grid.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessfulComponent } from './successful/successful.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    MedicineListComponent,
    UpdateMedicineComponent,
    MedicineDetailsComponent,
    AddUserComponent,
    LoginComponent,
    AdminloginComponent,
    MedicineGridComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    SuccessfulComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
