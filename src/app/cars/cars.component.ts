

import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = 'Tata Nexon';
  carId = 501;

  carInfo = {
    brand: 'Tata Motors',
    model: 'Nexon EV',
    type: 'Electric SUV',
    color: 'Signature Teal Blue'
  };

  features = ['Automatic Transmission', 'Sunroof', 'Fast Charging', 'AI Voice Assist'];
}
