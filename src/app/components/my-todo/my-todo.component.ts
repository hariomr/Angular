import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-todo',
  standalone: false,
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.scss']
})
export class MyTodoComponent {
  private _todos: { value: string, completed: boolean }[] = [];
  @Output() remove = new EventEmitter<number>();

  @Input()
  get todos(): { value: string, completed: boolean }[] {
    return this._todos;
  }

  set todos(value: { value: string, completed: boolean }[]) {
    this._todos = value;
  }

  removeTodo(index: number) {
    this.remove.emit(index);
  }

  onCheckboxChange(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

