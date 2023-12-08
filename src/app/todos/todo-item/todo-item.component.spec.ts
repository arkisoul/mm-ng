import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  const todo = {
    id: 1,
    title: 'Learn Angular',
    isCompleted: false,
    createdAt: '2023-12-08T00:09:00Z',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties with valid values', () => {
    expect(component.onTodoDelete).toBeTruthy();
    expect(component.onTodoStatusChange).toBeTruthy();
  });

  it('shuld emit onTodoDelete event with todo id on handleDelete', () => {
    component.todoItem = todo;
    fixture.detectChanges();
    const mockFn = spyOn(component.onTodoDelete, 'emit');
    component.handleDelete();
    expect(mockFn).toHaveBeenCalledOnceWith(todo.id);
  });

  it('shuld emit onTodoStatusChange event with todo id on handleStatusChange', () => {
    component.todoItem = todo;
    fixture.detectChanges();
    const mockFn = spyOn(component.onTodoStatusChange, 'emit');
    component.handleStatusChange({ target: { checked: true } });
    expect(mockFn).toHaveBeenCalledOnceWith({ ...todo, isCompleted: true });
  });
});
