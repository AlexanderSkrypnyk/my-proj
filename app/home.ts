import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'alert',
  directives: [
      AlertComponent, DATEPICKER_DIRECTIVES
  ],
  template:'<alert type="info" style="background-color:#4937fa;color:#ff1934">Alert </alert>'
})
export class Home {
  date: Date = new Date();

}
