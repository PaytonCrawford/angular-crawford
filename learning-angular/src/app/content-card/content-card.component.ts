// @ts-ignore
import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import { ContentList } from 'helper-files/content-interface';



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content: any;
  constructor() {

  }

  ngOnInit(): void {

  }

}
