import { Talk } from './talk';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  talks: Talk[] = [];

  constructor() { }

  addTalk(talk: Talk): void {
    this.talks.push(talk);
  }

  getTalks(): Observable<Talk[]> {
    return of(this.talks);
  }

  getTalkById(id: number): Talk {
    return this.talks[id];
  }
}
