import { Component } from '@angular/core';

@Component({
  selector: 'dst-root',
  template: `
    <div class="ui menu">
      <div class="ui container">
        <div class="header item borderless">
          <h1 class="ui header">
            <i class="comments outline icon"></i>
            Dev Summit Talks
          </h1>
        </div>
        <div class="right menu">

        </div>
      </div>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
