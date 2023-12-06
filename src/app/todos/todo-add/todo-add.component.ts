import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  UntypedFormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
})
export class TodoAddComponent {
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

  constructor(private readonly fb: UntypedFormBuilder) {
    console.log('cons', this.user);
    this.todoTitleFC.valueChanges.subscribe((value) => {
      if (value.length >= 3) {
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
    console.log(this.todoTitle, 'value submitted');
    console.log(this.todoTitleFC);
    this.todoTitle = '';
  }
}
