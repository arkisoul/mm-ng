import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly baseApiEndpoint: string = `http://localhost:3000/todos`;

  constructor(private http: HttpClient) {}

  fetchAllTodos() {
    return this.http.get<Todo[]>(this.baseApiEndpoint);
  }

  deleteATodo(id: number) {
    return this.http.delete(`${this.baseApiEndpoint}/${id}`);
  }

  createATodo(todo: Partial<Todo>) {
    return this.http.post(`${this.baseApiEndpoint}`, todo);
  }

  fetchATodoById(id: number) {
    return this.http.get<Todo[]>(`${this.baseApiEndpoint}/${id}`);
  }

  updateATodo(id: number, updatedTodo: Todo) {
    return this.http.put(`${this.baseApiEndpoint}/${id}`, updatedTodo);
  }
}
