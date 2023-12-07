import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.fetchAllTodos();
  }

  ngOnDestroy(): void {}

  fetchAllTodos() {
    this.todosService.fetchAllTodos().subscribe((data) => (this.todos = data));
  }

  getTodoItemClass(isCompleted: boolean) {
    return {
      'todo-item--completed': isCompleted,
    };
  }

  getTodoItemStyle(isCompleted: boolean) {
    return {
      color: isCompleted ? 'blue' : 'tomato',
    };
  }

  handleTodoDelete(id: number) {
    this.todos = this.todosService.deleteATodo(id);
  }

  handleAddTodo() {
    this.fetchAllTodos();
  }

  handleTodoStatusChange(todo: Todo) {
    this.todosService.updateATodo(todo.id, todo);
    this.fetchAllTodos();
  }
}
