import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Direction} from "../utils/constants/Direction";
import {calculateSwipeDirection} from "../utils/event-util";

@Injectable()
export class StratagemService {
currentStratagem$: BehaviorSubject<Direction[]> = new BehaviorSubject([] as Direction[]);

  constructor() {
    this.currentStratagem$.subscribe(currentStratagem => {
      console.log(currentStratagem);
      if (currentStratagem.length > 5) {
        this.currentStratagem$.next([]);
      }
    })
  }

  addDirectionToStratagem(direction: Direction): void {
    const prevStratagem = this.currentStratagem$.getValue();
    this.currentStratagem$.next([...prevStratagem, direction]);
  }

}
