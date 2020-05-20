import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostingsComponent} from './postings/postings.component';
import {PrintLayoutComponent} from './print-layout/print-layout.component';

const routes: Routes = [
  { path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'postings/:postingsIds', component: PostingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
