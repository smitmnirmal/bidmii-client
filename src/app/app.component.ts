import { Component } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) {}

  getData(){
    this.employeeService.getEmployeeData().subscribe((res:any)=>{
      // console.log(res);
      this.employees = res.data;
      console.log(this.employees);
    },
    err=>{
      console.log(err);
    })
  }
}
