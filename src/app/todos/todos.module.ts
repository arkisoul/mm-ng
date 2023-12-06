import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

@NgModule({
  declarations: [TodosListComponent, TodoItemComponent, TodoAddComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TodosListComponent],
})
export class TodosModule {}
