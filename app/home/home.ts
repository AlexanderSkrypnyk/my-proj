import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  directives: [
      AlertComponent, DATEPICKER_DIRECTIVES
  ]
})
export class Home {
  date: Date = new Date();
}
