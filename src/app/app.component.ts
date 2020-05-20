import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { PostingsService } from './services/postings/postings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('htmlData') htmlData: ElementRef;
  postings;
  currentDate;

  constructor(private postingsService: PostingsService) {}
  ngOnInit() {
    this.currentDate = new Date();
    this.postings = this.postingsService.getPostings();
  }
  public openPDF(): void {
    const DATA = this.htmlData.nativeElement;
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.fromHTML(DATA.innerHTML, 15, 15);
    doc.output('dataurlnewwindow');
  }

  public downloadPDF(): void {
    const DATA = this.htmlData.nativeElement;
    const doc = new jsPDF('p', 'pt', 'a4');

    const handleElement = {
      '#editor'(element, renderer) {
        return true;
      },
    };
    doc.fromHTML(DATA.innerHTML, 15, 15, {
      width: 200,
      elementHandlers: handleElement,
    });

    doc.save('angular9-print-to-template-jspdf.pdf');
  }
}
