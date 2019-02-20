import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostBstService {
  private url = 'http://localhost:5000/solid/binarySearchTree';

  constructor(private http: HttpClient) { }

  postBst(body): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/JSON'
    });

    const options = {headers : headers};
    return this.http.post(this.url, body, options);
  }
}
