import { TalksService } from './../talks.service';
import { Talk } from './../talk';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dst-talks-details',
  template: `
    <div class="center" *ngIf="talk != null">
      <dst-talk [talk]="talk"></dst-talk>
    </div>
  `,
  styles: []
})
export class TalksDetailsComponent implements OnInit {

  talk: Talk;

  constructor(
    activatedRoute: ActivatedRoute,
    talksService: TalksService
  ) {
    this.talk = talksService.getTalkById(activatedRoute.snapshot.params.id);
  }

  ngOnInit() {
  }

}
