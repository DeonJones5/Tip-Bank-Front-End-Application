import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterUserComponent } from '../register-user/register-user.component';

//create routes array
const routes: Routes = [
  { path: 'register-user', component: RegisterUserComponent },
  { path: '', redirectTo: 'register-user', pathMatch: 'full' }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
