


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Istudent } from 'src/app/models/students';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  
})
export class StudentsComponent implements OnInit {

  studentsArr :Array<Istudent> = [
  { 
    fname:"Poonam",
    lname:"Kumbhar",
    email:"poonam@gmail.com",
    contact:123456789,
    stdId:'123'
  },

  { 
    fname:"Sanchita",
    lname:"Patil",
    email:"sanchita@gmail.com",
    contact:1463734666,
    stdId:'123'
  }
]
    
   isInEdit:boolean=false;
  @ViewChild('fname')fnameRef!:ElementRef;
  @ViewChild('lname')lnameRef!:ElementRef;
  @ViewChild('email')emailRef!:ElementRef;
  @ViewChild('contact')contactRef!:ElementRef;

  constructor(
     private _matSnackbar : MatSnackBar
  ) { }
  ngOnInit(): void {
  }

  snackbar(msg:string){
    this._matSnackbar.open(msg, "Close",{
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








onstdAdd(){
 //new student object
  let stdObj : Istudent = {
    fname:this.fnameRef.nativeElement.value,
    lname:this.lnameRef.nativeElement.value,
    email:this.emailRef.nativeElement.value,
    contact:+this.contactRef.nativeElement.value,
    stdId:this.uuid()
  }

  this.fnameRef.nativeElement.value =''
  this.lnameRef.nativeElement.value =''
  this.emailRef.nativeElement.value=''
  this.contactRef.nativeElement.value=''

  //array me push
  this.studentsArr.unshift(stdObj)

  this.snackbar(`The new student Added successfully`)

}



onstdEdit(std : Istudent){
  this.isInEdit=true
  let EDIT_ID= std.stdId
  localStorage.setItem('EDIT_ID',EDIT_ID)
   this.fnameRef.nativeElement.value =std.fname;
  this.lnameRef.nativeElement.value =std.lname;
  this.emailRef.nativeElement.value=std.email;
  this.contactRef.nativeElement.value=std.contact;
}



onstdUpdate(){

  let STD_ID =localStorage.getItem('EDIT_ID')
  localStorage.removeItem('EDIT_ID')
  //UPDATED_OBJ
  if(STD_ID){
    let UPDATED_OBJ : Istudent = {
      fname: this.fnameRef.nativeElement.value,
      lname: this.lnameRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      contact: this.contactRef.nativeElement.value,
      stdId: STD_ID
    }
    console.log(UPDATED_OBJ);
    this.fnameRef.nativeElement.value =''
  this.lnameRef.nativeElement.value =''
  this.emailRef.nativeElement.value=''
  this.contactRef.nativeElement.value=''

  let index= this.studentsArr.findIndex(std => std.stdId === STD_ID)
  this.studentsArr[index] =UPDATED_OBJ
  this.isInEdit = false

  this.snackbar(`The student with id ${STD_ID} is updated successfully`)

}
}


onstdRemove(removeId : string){
let getConfirm = confirm(`are you sure, you want to remove this Student?`)

if (getConfirm){
//object ka index find karenge
let index = this.studentsArr.findIndex(std=> std.stdId === removeId)

// remove that object from array >> splice
this .studentsArr.splice (index,1)

this.snackbar(`The student with id ${removeId} is removed successfully`)
}
}
}
