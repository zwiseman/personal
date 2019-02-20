import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'app/models/employee';
import { MatDialogRef } from '@angular/material';
import { EmployeesService } from 'services/index';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent implements OnInit {
  options: FormGroup;
  employee: Employee = new Employee(null, null, null, null, null);
  subscription: Subscription;

  constructor(form: FormBuilder, public dialofRef: MatDialogRef<CreateEmployeeComponent>,
    private employeeService: EmployeesService, private router: Router) {
    this.options = form.group({
      hideRequire: false,
      floatLabel: 'auto'
    });
  }

  ngOnInit() {}

  close() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.dialofRef.close();
  }

  create() {
    this.subscription = this.employeeService.postEmployee(this.employee).subscribe(data => {
      this.dialofRef.close();
    });
  }
}
