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

  constructor() {
    this.onTodoDelete = new EventEmitter();
  }

  handleDelete() {
    this.onTodoDelete.emit(this.todoItem.id);
  }
}
