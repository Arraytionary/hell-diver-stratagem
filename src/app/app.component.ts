import { Component } from '@angular/core';
import {ArrowComponent} from "./components/arrow/arrow.component";
import {StratagemService} from "./services/stratagem.service";
import {ArrowInputComponent} from "./components/arrow-input/arrow-input.component";
import {Direction} from "./utils/constants/Direction";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ArrowComponent, ArrowInputComponent],
  providers: [StratagemService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hell-dive';
  protected readonly Direction = Direction;
}
