import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly baseApiEndpoint: string = `http://localhost:3000/todos`;
  todos: Todo[];

  constructor(private http: HttpClient) {
    this.todos = [];
  }

  fetchAllTodos() {
    return this.http.get<Todo[]>(this.baseApiEndpoint);
  }

  deleteATodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todos;
  }

  createATodo(todo: Todo) {
    this.todos.push(todo);
  }

  fetchATodoById(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  updateATodo(id: number, updatedTodo: Todo) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) return updatedTodo;
      return todo;
    });
  }
}
