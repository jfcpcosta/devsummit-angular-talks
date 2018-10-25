import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Talk } from '../talk';

@Component({
  selector: 'dst-talk',
  template: `
    <div class="ui card">
      <div class="content">
        <div class="header"><a href="javascript:void(0)" [routerLink]="['talk', id]">{{ talk.title }}</a></div>
        <div class="meta">
          <span class="category">{{ talk.author }}</span>
        </div>
        <div class="description">
          {{ talk.description }}
        </div>
      </div>
      <div class="extra content">
        <a href (click)="addVote()">
          <i class="arrow up icon"></i>
          upvote
        </a>
        <a href (click)="removeVote()">
          <i class="arrow down icon"></i>
          downvote
        </a>
        <div class="right floated author">
          {{ talk.votes }} votes
        </div>
      </div>
    </div>
  `,
  styles: [
    '.ui.card { margin-top: 1em; }'
  ]
})
export class TalkComponent implements OnInit {

  @Input()
  talk: Talk;

  @Input()
  id: number;

  constructor() { }

  ngOnInit() {
  }

  addVote() {
    this.talk.voteUp();

    return false;
  }

  removeVote() {
    this.talk.voteDown();

    return false;
  }

}
