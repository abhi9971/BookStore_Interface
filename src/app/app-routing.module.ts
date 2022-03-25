import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './MyComponent/cart/cart.component';
import { CustomerDetailsComponent } from './MyComponent/customer-details/customer-details.component';
import { ForgotPasswordComponent } from './MyComponent/forgot-password/forgot-password.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { OrderComponent } from './MyComponent/order/order.component';
import { OrdersummeryComponent } from './MyComponent/ordersummery/ordersummery.component';
import { RegisterComponent } from './MyComponent/register/register.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"forgotpassword",component:ForgotPasswordComponent},
  {path:"cart",component:CartComponent},
  {path:"customer/:email",component:CustomerDetailsComponent},
  {path:"order/:Id",component:OrdersummeryComponent},
  {path:"ordersummery",component:OrdersummeryComponent},
  {path:"order",component:OrderComponent},












];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
