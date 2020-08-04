import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customerModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  getAllCustomer(): Observable<Customer> {
    return this.http.get<Customer>(this.url + 'viewCustomer');
  }
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + 'viewCustomer/' + id);
  }
  addCustomer(customerDetails: Object) {
    return this.http.post(this.url + 'addCustomer', customerDetails);
  }
}
