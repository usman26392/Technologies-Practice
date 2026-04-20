import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  todoItems: Array<Todo> = [
    {
      userId: 1,
      id: 0,
      title: 'Groceries',
      completed: false,
    },
    {
      userId: 2,
      id: 1,
      title: 'car wash',
      completed: false,
    },
    {
      userId: 2,
      id: 2,
      title: 'paint',
      completed: true,
    },

  ];

  getTodosFromApi() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<Array<Todo>>(url);
  }


}
