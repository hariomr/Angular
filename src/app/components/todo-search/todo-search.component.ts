import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-search',
  standalone: false,
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.scss'
})
export class TodoSearchComponent implements OnInit {
  todos: { value: string, completed: boolean }[] = [];
  newTodo:string ='';


  addTodo(){
    if(this.newTodo.trim()){

      // retriveing the existing todos from the local storage
      let existingTodos = JSON.parse(localStorage.getItem("todos")||'[]');
      existingTodos.push({value: this.newTodo.trim(), completed: false});

      // after pushing the newtodo into the existing todos again adding the todos into localStorage
      localStorage.setItem("todos", JSON.stringify(existingTodos));

      this.todos = existingTodos;
      this.newTodo = '';  // Clear the input field
      
    }
  }

  handleRemove(index:number){
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  ngOnInit(){
    this.todos = JSON.parse(localStorage.getItem("todos") || '[]');
  }
}
