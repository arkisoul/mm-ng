import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  // @Input('todoItem') todo!: Todo;
  @Input() todoItem!: Todo;
  @Output('onTodoDelete') onTodoDelete: EventEmitter<number>;
  @Output('onTodoStatusChange') onTodoStatusChange: EventEmitter<Todo>;

  constructor() {
    this.onTodoDelete = new EventEmitter();
    this.onTodoStatusChange = new EventEmitter();
  }

  handleDelete() {
    this.onTodoDelete.emit(this.todoItem.id);
  }

  handleStatusChange(e: any) {
    this.onTodoStatusChange.emit({
      ...this.todoItem,
      isCompleted: e.target.checked,
    });
  }
}
