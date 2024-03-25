import {Component, Input, input, OnInit} from "@angular/core";
import { NgClass } from "@angular/common";
import {StratagemService} from "../../services/stratagem.service";
import {Direction} from "../../utils/constants/Direction";
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
  }

  ngOnInit(): void {
  }

}
