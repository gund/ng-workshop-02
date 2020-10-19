import { Directive, ElementRef, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLogUpdates]',
})
export class LogUpdatesDirective implements OnChanges {
  constructor(private elemRef: ElementRef) {
    console.log(`Attached to`, this.elemRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    // works as well
    // console.log('Hello ' + changes.log.currentValue);
  }

  @HostListener('updateName', ['$event'])
  logName(newName: string) {
    console.log('Hello ' + newName + '!');
  }
}
