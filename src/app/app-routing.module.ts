import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalksListComponent } from './talks-list/talks-list.component';
import { TalksDetailsComponent } from './talks-details/talks-details.component';

const routes: Routes = [
  { path: '', component: TalksListComponent },
  { path: 'talk/:id', component: TalksDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
