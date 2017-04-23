import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent }  from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { CccComponent } from './ccc/ccc.component';
import { EventComponent }  from './event/event.component';
import { AdminComponent }  from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { EventBookingComponent } from './event/booking/booking.component';

export const router:  Routes = [
    { path: '' , component: HomeComponent},
     { path: 'about' , component: AboutComponent},
     {path: 'program', component: ProgramComponent},
     { path: 'ccc' , component: CccComponent},
     { path: 'event' , component: EventComponent},
     { path: 'users' , component: UsersComponent},
     { path: 'event/booking', component: EventBookingComponent}
];

export const myrouter: ModuleWithProviders = RouterModule.forRoot(router);
   
