import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient:HttpClient) { }

  getEmployees():Observable<any>{
    return this._httpClient.get('https://6572df5d192318b7db412dfe.mockapi.io/employees');
  }

  createEmployee(employee:any):Observable<any>{
    return this._httpClient.post('https://6572df5d192318b7db412dfe.mockapi.io/employees', employee);
  }
}
