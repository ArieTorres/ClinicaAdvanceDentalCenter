import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare const Parse: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AdvanceDentalCenter';

  ngOnInit() {
    Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    Parse.serverURL = environment.serverURL;
  }
}
