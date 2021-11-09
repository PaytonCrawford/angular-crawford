import {Component, OnInit} from '@angular/core';
import {ContentCardComponent} from "./content-card/content-card.component";
import { Content } from "./helper-files/content-interface"
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'learning-angular';

  contentArray = [{
    id: 1,
    author: "Payton Crawford",
    title: "Basketball",
    type: "Team Sport",
    imgUrl: "https://cdn.pixabay.com/photo/2015/05/15/14/49/basketball-768713__340.jpg",
    body: "Michael Jordan is the best basketball player of all time.",
    tags: ["Ball", " Team", " Jordan", " Dunk"]
  }, {
    id: 2,
    author: "Payton Crawford",
    title: "Football",
    type: "Team Sport",
    imgUrl: "https://cdn.pixabay.com/photo/2016/11/22/23/30/american-football-1851168_960_720.jpg",
    body: "Football is an american sport.",
    tags: ["Tough", " Brady", " Throw", " Touchdown"]
  }, {
    id: 3,
    author: "Payton Crawford",
    title: "Hockey",
    type: "Team Sport",
    imgUrl: "https://cdn.pixabay.com/photo/2017/03/28/02/17/hockey-2180834_960_720.jpg",
    body: "Hockey is played on ice.",
    tags: ["Ice", " Stick", " Net", " Gretzky"]
  }, {
    id: 4,
    author: "Payton Crawford",
    title: "Baseball",
    type: "Team Sport",
    imgUrl: "https://cdn.pixabay.com/photo/2016/05/22/01/38/hit-1407826_960_720.jpg",
    body: "Pretty boring...",
    tags: ["Boring", " More Boring", " Even More Boring", " Sleep"]
  }, {
    id: 5,
    author: "Payton Crawford",
    title: "Esports",
    type: "Team Sport",
    body: "Competitive variety of video games.",
    tags: ["Controller", " Technology", " Rocket League", " Money"]
  }, {
    id: 6,
    author: "Payton Crawford",
    title: "Golf",
    type: "Individual Sport",
    imgUrl: "https://cdn.pixabay.com/photo/2013/02/09/13/39/tiger-woods-79694_960_720.jpg",
    body: "The best sport in the world.",
    tags: ["FORE!", " Tiger Woods", " Club", " Fairway"]
  }]

  public constructor(private contentService: ContentService) {
  }

  public ngOnInit() {

  }

  CheckContent(input: string): void {
    for (let i = 0; i < this.contentArray.length; i++) {
      if (this.contentArray[i].title === input) {
        console.log("There was a match! " + input + " was found.")
        break;
      } else {
        console.log("Sorry! " + input + " was not found.")
      }
    }
  }

}
