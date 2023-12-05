import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TodosModule } from './todos/todos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HelloWorldComponent, TodosModule],
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
