import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PrintService} from '../print.service';
import { PostingsService } from '../postings.service';

@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.css']
})
export class PostingsComponent implements OnInit {
  postingsIds: string[];
  postingsDetails: Promise<any>[];
  postings;
  currentDate;

  constructor(route: ActivatedRoute,
              private printService: PrintService,
              private postingsService: PostingsService
              ) {
    this.postingsIds = route.snapshot.params['postingsIds']
      .split(',');
  }

  ngOnInit() {
    this.currentDate = new Date();
    this.postings = this.postingsService.getPostings();
    this.postingsDetails = this.postingsIds
      .map(id => this.getPostingsDetails(id));
    Promise.all(this.postingsDetails)
      .then(() => this.printService.onDataReady());
  }

  getPostingsDetails(postingsId) {
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({amount}), 1000)
    );
  }
}
