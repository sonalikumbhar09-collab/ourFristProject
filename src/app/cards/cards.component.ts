
import { Component } from '@angular/core';
import { postsArr } from '../consts/cards';
import { Icard } from '../models/cards';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent{

    postsArr :Array<Icard> = postsArr

}