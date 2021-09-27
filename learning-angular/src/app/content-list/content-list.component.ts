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
      title: "Basketball",
      imgUrl: "https://cdn.pixabay.com/photo/2015/05/15/14/49/basketball-768713__340.jpg",
      body: "Michael Jordan is the best basketball player of all time."
    }, {
      id: 2,
      author: "Payton",
      title: "Football",
      imgUrl: "https://cdn.pixabay.com/photo/2016/11/22/23/30/american-football-1851168_960_720.jpg",
      body: "Football is an american sport."
    }, {
      id: 3,
      author: "Payton",
      title: "The Life Of Payton",
      imgUrl: "https://cdn.pixabay.com/photo/2016/11/22/23/30/american-football-1851168_960_720.jpg",
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
