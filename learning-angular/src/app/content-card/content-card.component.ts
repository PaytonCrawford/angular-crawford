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

  constructor() { }

  ngOnInit(): void {

    let contentItem: ContentList = {
      id: 1,
      author: "Payton",
      title: "Test Title"
    }


  }
}
