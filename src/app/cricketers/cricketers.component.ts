
import { Component } from '@angular/core';

@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent {
  playerName = 'Virat Kohli';
  playerId = 18;

  playerInfo = {
    team: 'India',
    role: 'Batsman',
    captaincy: 'Former Captain',
    debutYear: 2008
  };

 players = [
    'Virat Kohli',
    'Mahendra Singh Dhoni',
    'Sachin tendulakar',
    'Rohit Sharma',
    'Shubman Gill'
  ];
}
