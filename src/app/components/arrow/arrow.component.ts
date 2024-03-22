import {Component, Input, input, OnInit} from "@angular/core";
import { NgClass } from "@angular/common";
import {StratagemService} from "../../services/stratagem.service";


export enum Direction {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right"
}
@Component({
    selector: 'app-arrow',
    templateUrl: './arrow.component.html',
    styleUrls: ['./arrow.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class ArrowComponent implements OnInit {
  isActive = input<boolean>(false);
  direction = input.required<Direction>()
  constructor(private readonly stratagemService: StratagemService) {
    console.log(this.stratagemService.num)
  }

  ngOnInit(): void {
  }

}
