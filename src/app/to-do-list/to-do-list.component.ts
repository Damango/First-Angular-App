import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  toDoList: any[] = [' Angular', ' TypeScript', ' JavaScript'];

  constructor() {}

  theFunction(): void {}

  myClear = (toDoItem: any): void => {
    console.log(typeof toDoItem);
    let itemIndex = this.toDoList.indexOf(toDoItem);
    console.log(itemIndex);
    this.toDoList.splice(itemIndex, 1);
  };

  addToDoItem = (toDoItem: any): void => {
    this.toDoList.push(toDoItem);
  };

  clearList(): void {}

  ngOnInit(): void {}
}
