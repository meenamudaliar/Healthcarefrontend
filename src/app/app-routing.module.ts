import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineGridComponent } from './medicine-grid/medicine-grid.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { SuccessfulComponent } from './successful/successful.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

const routes: Routes = [{path: 'medicines',component: MedicineListComponent},
{path:'home',component:HomeComponent},
{path: 'add-medicine',component:AddMedicineComponent},
{path: 'cart-details', component: CartDetailsComponent},
{path: '',redirectTo:'home',pathMatch:'full'},
{path: 'update-medicine/:id',component:UpdateMedicineComponent},
{path: 'medicine-details/:id', component: MedicineDetailsComponent},
{path:'add-user',component:AddUserComponent},
{path: 'search/:keyword', component: MedicineListComponent},
{path: 'login',component:LoginComponent},
{path:'success',component:SuccessfulComponent},
{path:'checkout',component:CheckoutComponent},
{path:'items',component:MedicineGridComponent},
{path:'adminlogin',component:AdminloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
