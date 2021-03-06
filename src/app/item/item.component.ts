import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoRemove: EventEmitter<Todo>= new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoRemove.emit(todo);
    console.log(" onClick() is clicked for " + todo.id)
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
    console.log(" works till here, todocheckbox emitted")
  }
}
