import { Component } from '@angular/core';
import {DatepickerOptions} from '../ng-datepicker/component/ng-datepicker.component';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date;
  options: DatepickerOptions = {
    locale: enLocale,
    minDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)), // Minimal selectable date
    maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),  // Maximal selectable date
  };
  constructor() {
    this.date = new Date();
  }
}
