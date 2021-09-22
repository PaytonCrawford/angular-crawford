import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentArray: Content[];


  constructor() {
    this.contentArray = [{
      id: 1,
      author: "Payton",
      title: "The Life Of Payton",
      body: "Pretty boring..."
    }, {
      id: 2,
      author: "Payton",
      title: "The Life Of Payton",
      body: "Pretty boring..."
    }, {
      id: 3,
      author: "Payton",
      title: "The Life Of Payton",
      body: "Pretty boring..."
    }, {
      id: 4,
      author: "Payton",
      title: "The Life Of Payton",
      body: "Pretty boring..."
    }, {
      id: 5,
      author: "Payton",
      title: "The Life Of Payton",
      body: "Pretty boring..."
    }]
  }

  ngOnInit(): void {

  }

}
