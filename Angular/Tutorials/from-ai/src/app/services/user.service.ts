import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// Topic: http module

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Get all users
  getUsers(): Observable<UserI[]> {
    return this.http.get<UserI[]>(this.apiUrl)
  }
}


export interface UserI {
  id: number;
  name: string;
  email: string;
  phone: string;
}
