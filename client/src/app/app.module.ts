import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { myrouter } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { CccComponent } from './ccc/ccc.component';
import { EventComponent } from './event/event.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { EventBookingComponent } from './event/booking/booking.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProgramComponent,
    CccComponent,
    EventComponent,
    UsersComponent,
    AdminComponent,
    HomeComponent,
    EventBookingComponent,
    CheckoutComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myrouter,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
