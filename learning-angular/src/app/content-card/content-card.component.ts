// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { ContentList } from 'helper-files/content-interface';



// @ts-ignore
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  content: ContentList;
  constructor() {

  }

  ngOnInit(): void {
    this.content = {
      name: "Payton Crawford"
    }
  }
}
