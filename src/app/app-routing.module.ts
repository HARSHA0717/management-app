import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'employee',component:EmployeeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
