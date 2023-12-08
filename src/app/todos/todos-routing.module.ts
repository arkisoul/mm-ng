import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { todoRoutes } from './todos.routes';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
