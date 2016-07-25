import {Component} from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';

@Component({
  selector: 'alert',
  template:'<alert type="info" style="background-color:#4937fa;color:#ff1934">Alert </alert>'
})
class Alert {}

bootstrap(Alert);
