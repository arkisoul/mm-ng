import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
})
export class TodoAddComponent {
  @Output('onAddTodo') onAddTodo: EventEmitter<void>;
  todoTitle: string = 'Learn JavaScript';
  todoTitleFC: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  userFormGroup: FormGroup;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private todosService: TodosService
  ) {
    this.onAddTodo = new EventEmitter();
    console.log('cons', this.user);
    this.todoTitleFC.valueChanges.subscribe((value) => {
      if (value && value.trim().length >= 3) {
        console.log('valueChanges', this.todoTitleFC);
      }
    });
    this.user.controls.name.valueChanges.subscribe((value) => {});
    this.user.get('name')?.valueChanges.subscribe((value) => {});
    this.user.valueChanges.subscribe((value) => {});
    this.userFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
    console.log(this.userFormGroup);
  }

  handleTodoSubmit() {
    if (this.todoTitleFC.invalid) return false;
    this.todosService.createATodo({
      id: 1,
      title: this.todoTitleFC.value.trim(),
      isCompleted: false,
      createdAt: new Date().toISOString(),
    });
    this.onAddTodo.emit();
    this.todoTitleFC.reset();
    return true;
  }
}
