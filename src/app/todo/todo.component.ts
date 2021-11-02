import { Component} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  title="these are thr pending todos";
  todos: Todo[];

  constructor() {

    if(localStorage.getItem('todos')== null){
        this.todos=[];
    }
    else{
      this.todos= JSON.parse(localStorage.getItem('todos')!);
    }
  
   }

   //remove todo method
   remove_todo(todo: Todo){
      console.log(todo);

      //function delete
      const indx= this.todos.indexOf(todo);
      //remove one element starting from in index
      this.todos.splice(indx, 1);

      //save updates in local storage
      localStorage.setItem("todos", JSON.stringify(this.todos));
   }
   addTodo( todo:Todo){
     console.log(todo);
     //add todo to todos array
     this.todos.push(todo);
     localStorage.setItem("todos", JSON.stringify(this.todos));
   }

  toggleTodo( todo:Todo){
    console.log(todo);
      const indx= this.todos.indexOf(todo);
       //toggle state on click of checkbox
      this.todos[indx].active= ! this.todos[indx].active;
      localStorage.setItem("todos", JSON.stringify(this.todos));
  }


}
