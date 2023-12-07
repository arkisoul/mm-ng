import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  fetchAllTodos() {
    return this.todos;
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
