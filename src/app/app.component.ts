import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string;

  list: string[] = ['some', 'things', 'here'];

  addName() {
    this.list.push(this.name);
    this.name = '';
  }

  updateName(name: string, idx: number) {
    this.list[idx] = name + '!';
  }
}
