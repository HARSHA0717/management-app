import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  delete(i:number){
    this.employees.splice(i,1);
  }

  employees:any=[];

  constructor(private _EmployeeService:EmployeeService) {
    _EmployeeService.getEmployees().subscribe(
      (data:any) => {
        this.employees = data;
      },
      (error) => {
        console.error(error);
      }
    )
    
  }

}
