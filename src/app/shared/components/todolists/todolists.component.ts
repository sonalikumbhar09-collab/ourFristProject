import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/models/todolist';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent implements OnInit {
todosArray: Array<Itodo> =[
  {
    todoItem:'javascript',
    todoId:'1234'
  },{
    todoItem:'sass',
    todoId:'1235'
  }
]


 isInEditMode:boolean=false;
@ViewChild('todoItem') todoItemRef!:ElementRef
  constructor(
    private  matSnackBar: MatSnackBar
) {}

  ngOnInit(): void {}

  snackbar(msg:string){
    this.matSnackBar.open(msg, "Close",{
      duration :3000,
      horizontalPosition : 'left',
      verticalPosition : 'top'

    })
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, character => {
      const random = (Math.random() * 16) | 0;
      const value = character === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }

   onTodoAdd(todoItemControl: HTMLInputElement) {
    if (todoItemControl.value) {
      let todoObj: Itodo = {
        todoItem: todoItemControl.value,
        todoId: this.uuid()
      };
      this.todosArray.push(todoObj);
      this.snackbar(`The new student Added successfully`)
      
    }
  }


  onTodoRemove(todoId : string){
  //GET REMOVE_ID
  let REMOVE_ID =todoId
  console.log(REMOVE_ID)
  //FET INDEX NO OF THE OBJECT
 let GET_INDEX =this.todosArray.findIndex(todo=>todo.todoId=== REMOVE_ID);
 console.log(GET_INDEX)
   //REMOVE OBJECT FROM ARRAY
   this.todosArray.splice(GET_INDEX,1)
   this.snackbar(`The todo item  id ${todoId} is removed successfully !!!`)
}


onTodoEdit(todoObj : Itodo){
  //EDIT_MODE ON == true
  this.isInEditMode= true
  //FIND THE EDIT_OBJECT
  console.log(todoObj);
  //EDIT_ID
  let EDIT_ID =todoObj.todoId;
  localStorage.setItem('EDIT_ID', EDIT_ID);

  //PATCH DATA IN FORM
   this.todoItemRef.nativeElement.value=todoObj.todoItem
}


onTodoUpdate( todoItemControl : HTMLInputElement){
  //UPDATE_ID
  let UPDATE_ID= localStorage.getItem('EDIT_ID')
  localStorage.removeItem('EDIT_ID')

  //UPDATED_OBJ
  if(UPDATE_ID){
  let UPDATED_OBJ:Itodo ={
    todoItem :todoItemControl.value,
    todoId: UPDATE_ID
  }
  console.log(UPDATED_OBJ);
   todoItemControl.value= ''
  //UPDATE IN ARRAY
  let GET_INDEX= this.todosArray.findIndex(todo => todo.todoId === UPDATE_ID)
  this.todosArray[GET_INDEX] = UPDATED_OBJ;
  this.isInEditMode = false

  this.snackbar(`The todo object with  id ${UPDATE_ID} is updated successfully !!!`)
}
}
}
 

 

 