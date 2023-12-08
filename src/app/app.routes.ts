import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () =>
      import('./todos/todos.module').then((m) => m.TodosModule),
  },
  { path: '', component: HelloWorldComponent },
  { path: '**', component: PageNotFoundComponent },
];
