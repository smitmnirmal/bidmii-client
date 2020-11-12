import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string = "http://127.0.0.1:8080/"
  constructor(private http: HttpClient) {}

  getEmployeeData(){
    // return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
    return this.http.get(this.url+"employees");
  }
}
