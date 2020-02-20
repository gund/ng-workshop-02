import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogUpdates]',
})
export class LogUpdatesDirective {
  private log:string;

  constructor(private elemRef: ElementRef) {
    console.log(`Attached to`, this.elemRef.nativeElement);
  }

  @HostListener('updateName', ['$event']) onUpdate(event) {
    this.logUpdatedName(event);
  }

  private logUpdatedName(event): void {
    this.log = event;
    console.log(this.log);  
  }
}
