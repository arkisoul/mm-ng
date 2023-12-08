import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent implements OnInit {
  todoItem!: Todo;
  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const todoId = parseInt(params.get('todoId') || '');
      this.todosService.fetchATodoById(todoId).subscribe((todo) => {
        this.todoItem = todo;
      });
    });
  }
}
