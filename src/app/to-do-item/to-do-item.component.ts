import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  @Input() toDoValue: string;
  @Input('clearList') clearList(args: any): void {}

  somethingTest: string;

  constructor() {}

  ngOnInit(): void {}
}
