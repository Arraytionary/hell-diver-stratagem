import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {ArrowComponent, Direction} from "../arrow/arrow.component";
import {fromEvent, pipe, tap} from "rxjs";

@Component({
  selector: 'app-arrow-input',
  standalone: true,
  imports: [
    ArrowComponent
  ],
  templateUrl: './arrow-input.component.html',
  styleUrl: './arrow-input.component.scss'
})
export class ArrowInputComponent implements AfterViewInit{
  @ViewChild('filterContainer',{static:false}) swipeAreaRef: ElementRef | undefined;
  swipeArea!: HTMLElement
  ngAfterViewInit(): void {
    this.swipeArea = this.swipeAreaRef?.nativeElement;
    console.log(this.swipeArea)
    const touchInComponent = fromEvent(this.swipeArea, 'touchstart');
    const swipeInComponent = fromEvent(this.swipeArea, 'touchmove');
    touchInComponent
      .pipe(
        tap(event => console.log(event))
      ).subscribe()
    swipeInComponent
      .pipe(
        tap(event => console.log(event))
      ).subscribe()

  }

  protected readonly Direction = Direction;
}
