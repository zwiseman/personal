import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'app/models/employee';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url = environment.serveremp + '/employees';

  constructor(private http: HttpClient) { }


  getEmployeesObserve(): Observable<any> {
    return this.http.get(this.url);
  }

  postEmployee(body: Employee): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/JSON'
    });

    const options = {headers : headers};
    return this.http.post(this.url, body, options);
  }

  putEmployee(body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/JSON'
    });

    const options = {headers : headers};
    return this.http.put(this.url, body, options);
  }

  deleteEmployee(body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/JSON'
    });
    const options = {headers : headers};
    return this.http.post(this.url + '/deleteEmployee', body, options);
  }
 }
