import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPost {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl);
  }

}
