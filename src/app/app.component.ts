import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TodosModule } from './todos/todos.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HelloWorldComponent,
    RouterLink,
    PageNotFoundComponent,
  ],
  // template: `<h1>Hello, world!</h1>`,
  // styles: ['h1{color: tomato;}', '', ''],
  // styleUrls: ['./app.component.css', './app.component.css']
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TodoAPP';

  handleClick(value: string) {
    console.log('button clicked', value);
  }
}
