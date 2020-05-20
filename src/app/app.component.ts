import { Component } from '@angular/core';
import {PrintService} from './print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-print-service';

  constructor(public printService: PrintService) { }

  onPrintPostings() {
    const postingsIds = ['101', '102'];
    this.printService
      .printDocument('postings', postingsIds);
  }
}
