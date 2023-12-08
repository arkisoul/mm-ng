import { Routes } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const todoRoutes: Routes = [
  { path: ':todoId', component: TodoDetailComponent },
  { path: '', component: TodosListComponent },
];
