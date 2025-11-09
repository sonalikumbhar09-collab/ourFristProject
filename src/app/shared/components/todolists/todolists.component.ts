import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/models/todolist';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent implements OnInit {
todosArray=[
  {
    todoItem:'javascript',
    todoId:'1234'
  },{
    todoItem:'sass',
    todoId:'1235'
  }
]

  constructor() { }

  ngOnInit(): void {
  }
 Uuid = ()=> {
    return (
      String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
});
};

}