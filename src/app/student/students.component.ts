import { Component } from '@angular/core';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent{
 stdArr: Array<Istudent> = [
    {
    fname:'Sonali',
    lname:'kumbhar',
    isActive:true,
    email:'sonali@123.com',
    contact:12334567890
    },
    {
    fname:'Varsha',
    lname:'Shitole',
    isActive:false,
    email:'varsha@123.com',
    contact:5647892444
    },
    {
    fname:'Drakshayni',
    lname:'Patil',
    isActive:true,
    email:'Drakshayni@patil.com',
    contact:1232564783
    },
    {
    fname:'Shivani',
    lname:'Ghotane',
    isActive:false,
    email:'ghotane@shivani.com',
    contact:1457891282
    }

 ]
}