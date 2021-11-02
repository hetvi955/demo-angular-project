import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
title:string;
desc:string;
@Output() todoAdd: EventEmitter<Todo>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // to make new todo
  onAdd(){
    const todo={
      id:4,
      title:this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
