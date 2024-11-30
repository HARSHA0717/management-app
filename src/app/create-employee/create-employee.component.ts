import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employees:any =[];
  public userForm:FormGroup = new FormGroup({
    name: new FormControl(),
    company:new FormControl(),
    role:new FormControl(),
    package:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
    }),
    workMode:new FormControl(),

  })

  constructor(private _employeeService:EmployeeService){
    this.userForm.get("workMode")?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='remote'){
          this.userForm.addControl('wifi',new FormControl());
          this.userForm.removeControl('cab');
          }
          else{
            this.userForm.addControl('cab',new FormControl());
            this.userForm.removeControl('wifi');
          }
      }
    )

   
  }
  submit(){
    console.log(this.userForm);
  }

  


}
