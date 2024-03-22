import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {
  direction = input()
  constructor() { }

  ngOnInit(): void {
  }

}
