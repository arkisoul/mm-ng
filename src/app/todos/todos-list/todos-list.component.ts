import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent {
  todos = [
    {
      id: 1,
      title: 'Learn Typescript',
      isCompleted: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Learn Angular',
      isCompleted: false,
      createdAt: new Date().toISOString(),
    },
  ];

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

  popOutATodo() {
    if (this.todos.length) {
      this.todos.pop();
      return;
    }
  }

  handleTodoDelete(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
