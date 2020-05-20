import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { PostingsComponent } from './postings/postings.component';
import {PrintService} from './print.service';
import { PostingsService } from './postings.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrintLayoutComponent,
    PostingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PrintService, PostingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
