import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { ForgotPasswordComponent } from './MyComponent/forgot-password/forgot-password.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { CartComponent } from './MyComponent/cart/cart.component';
import { CustomerDetailsComponent } from './MyComponent/customer-details/customer-details.component';
import { OrdersummeryComponent } from './MyComponent/ordersummery/ordersummery.component';
import { OrderComponent } from './MyComponent/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    HomeComponent,
    CartComponent,
    CustomerDetailsComponent,
    OrdersummeryComponent,
    OrderComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
