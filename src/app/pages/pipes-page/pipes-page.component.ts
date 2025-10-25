import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal  } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-pipes-page',
  imports: [UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './pipes-page.component.html',
})
export class PipesPageComponent {

  firstName = signal('tony');
  lastName = signal('STARK');

  user = signal({
    id:1,
    firstName: this.firstName(),
    lastName: this.lastName(),
    age:40,
    email: 'john.example.com'
  });

  currerDate = signal(new Date());
  birthDate = signal(new Date('2004-11-14'));

  price = signal(1234.5);
  percent = signal(0.2345);
 }
