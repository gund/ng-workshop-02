import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h3>Hello {{ name }}</h3>
    <button (click)="updateName.emit(name)">Update name</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  @Output() updateName = new EventEmitter<string>();
}
