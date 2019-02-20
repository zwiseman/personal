import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BinarySearchTreeService {
  private url = environment.server5000 + '/solid/binarySearchTree';

  constructor(private http: HttpClient) { }

  getBinarySearchTree(): Observable<any> {
    return this.http.get(this.url);
  }
}
