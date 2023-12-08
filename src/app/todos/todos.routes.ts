import { Routes } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { authGuard } from '../shared/auth.guard';

export const todoRoutes: Routes = [
  {
    path: ':todoId',
    component: TodoDetailComponent,
    canActivate: [authGuard],
    title: 'Todos details',
  },
  {
    path: '',
    component: TodosListComponent,
    canActivate: [authGuard],
    title: 'Todos list',
  },
];
