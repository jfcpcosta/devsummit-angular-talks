import { Talk } from './../talk';
import { Component, OnInit } from '@angular/core';
import { TalksService } from '../talks.service';

@Component({
  selector: 'dst-talks-list',
  template: `
    <div class="ui grid posts">
      <div class="six wide column">
        <form class="ui large form segment">
          <h3 class="ui header">Add a Talk</h3>

          <div class="field">
            <label for="title">Title:</label>
            <input name="title" #titleInput>
          </div>
          <div class="field">
            <label for="author">Author:</label>
            <input name="author" #authorInput>
          </div>
          <div class="field">
            <label for="description">Description:</label>
            <textarea name="description" #descriptionInput></textarea>
          </div>

          <button (click)="addTalk(titleInput.value, authorInput.value, descriptionInput.value)" class="ui right floated button">
            Submit Talk
          </button>
        </form>
      </div>

      <div class="eight wide column">
        <div class="ui grid">
          <dst-talk *ngFor="let talk of talks; let i = index" [talk]="talk" [id]="i"></dst-talk>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TalksListComponent implements OnInit {

  talks: Talk[] = [];

  constructor(
    private talksService: TalksService
  ) {
  }

  ngOnInit() {
    this.talksService.getTalks().subscribe(talks => this.talks = talks);
  }

  addTalk(title: string, author: string, description: string) {
    console.log(`Adding talk with title ${title} and description ${description}`);

    const talk = new Talk(title, author, description);
    // this.talks.push(talk);
    this.talksService.addTalk(talk);

    return false;
  }

  sortedTalks(): Talk[] {
    return this.talks.sort((a: Talk, b: Talk) => b.votes - a.votes);
  }

}
