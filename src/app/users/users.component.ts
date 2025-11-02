

import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName = 'Sonali Kumbhar';
  userId = 101;

  userInfo = {
    fname: 'Sonali',
    lname: 'Kumbhar',
    nativePlace: 'Kolhapur',
    profile: 'Frontend Developer'
  };

  skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript'];
}
