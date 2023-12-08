import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    TodosListComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoDetailComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TodosRoutingModule],
  exports: [TodosListComponent],
})
export class TodosModule {}
