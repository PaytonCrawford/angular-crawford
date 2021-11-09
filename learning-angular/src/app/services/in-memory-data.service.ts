import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const CONTENT: Content[] = [{
      id: 1,
      author: "Payton Crawford",
      title: "Basketball",
      type: "Team Sport",
      imgUrl: "https://cdn.pixabay.com/photo/2015/05/15/14/49/basketball-768713__340.jpg",
      body: "Michael Jordan is the best basketball player of all time.",
      tags: ["Basketball", "Jordan"]
    }, {
      id: 2,
      author: "Payton Crawford",
      title: "Football",
      type: "Team Sport",
      imgUrl: "https://cdn.pixabay.com/photo/2016/11/22/23/30/american-football-1851168_960_720.jpg",
      body: "Football is an american sport.",
      tags: ["Lombardi", "Field"]
    }, {
      id: 3,
      author: "Payton Crawford",
      title: "Hockey",
      type: "Team Sport",
      imgUrl: "https://cdn.pixabay.com/photo/2017/03/28/02/17/hockey-2180834_960_720.jpg",
      body: "Hockey is played on ice.",
      tags: ["Puck", "Ice"]
    }, {
      id: 4,
      author: "Payton Crawford",
      title: "Baseball",
      type: "Team Sport",
      imgUrl: "https://cdn.pixabay.com/photo/2016/05/22/01/38/hit-1407826_960_720.jpg",
      body: "Pretty boring...",
      tags: ["Boring", "Bat"]
    }, {
      id: 5,
      author: "Payton Crawford",
      title: "Esports",
      type: "Team Sport",
      body: "Competitive variety of video games.",
      tags: ["Gaming", "CSGO"]
    }, {
      id: 6,
      author: "Payton Crawford",
      title: "Golf",
      type: "Individual Sport",
      imgUrl: "https://cdn.pixabay.com/photo/2013/02/09/13/39/tiger-woods-79694_960_720.jpg",
      body: "The best sport in the world.",
      tags: ["Tiger", "Putting"]
    }];

    return {CONTENT};
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(contentItem => contentItem.id)) + 1 : 0;
  }

}
