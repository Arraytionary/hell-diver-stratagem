import {Component, ElementRef, ViewChild, AfterViewInit, inject} from '@angular/core';
import {ArrowComponent} from "../arrow/arrow.component";
import {BehaviorSubject, debounceTime, fromEvent, map, Observable, pipe, Subscription, switchMap, tap} from "rxjs";
import {Direction} from "../../utils/constants/Direction";
import {calculateSwipeDirection} from "../../utils/event-util";
import {CommonModule} from "@angular/common";
import {StratagemService} from "../../services/stratagem.service";

@Component({
  selector: 'app-arrow-input',
  standalone: true,
  imports: [
    ArrowComponent,
    CommonModule
  ],
  templateUrl: './arrow-input.component.html',
  styleUrl: './arrow-input.component.scss'
})
export class ArrowInputComponent implements AfterViewInit{
  @ViewChild('filterContainer',{static:false}) swipeAreaRef: ElementRef | undefined;
  swipeArea!: HTMLElement
  touchDirection!: Observable<any>;
  stratagemService = inject(StratagemService);
  currentStratagem$ = this.stratagemService.currentStratagem$;
  ngAfterViewInit(): void {
    this.swipeArea = this.swipeAreaRef?.nativeElement;
    const touchInComponent = fromEvent<TouchEvent>(this.swipeArea, 'touchstart') ;
    const swipeInComponent = fromEvent<TouchEvent>(this.swipeArea, 'touchmove');
    touchInComponent
      .pipe(
        switchMap(touchEvent => swipeInComponent
          .pipe(
            debounceTime(300),
            tap(swipeEvent => {
              const swipeDirection = calculateSwipeDirection(touchEvent, swipeEvent);
              this.stratagemService.addDirectionToStratagem(swipeDirection);
            })
          ))
      ).subscribe();
  }

  protected readonly Direction = Direction;
}
