import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeesService } from 'services/index';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit, OnDestroy {
  options: FormGroup;
  employee: any;
  disabled = false;
  subscription: Subscription;

  constructor(public dialofRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, formBuider: FormBuilder,
    private employeeService: EmployeesService) {
      this.options = formBuider.group({
        hideRequired: false,
        floatLabel: 'auto'
      });
      this.employee = data;
     }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  close() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.dialofRef.close();
  }

  update() {
    this.subscription = this.employeeService.putEmployee(this.employee).subscribe(data => {
      this.dialofRef.close();
    });
  }

}
