import { Component, OnInit } from '@angular/core';
import {ContentService} from "../services/content.service";
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  public title = "learning-angular :)"

  sportContent: Content[] = [];

  contentItem = {
    id: 7,
    author: "TEST ITEM",
    title: "TEST ITEM",
    type: "TEST ITEM",
    body: "TEST ITEM",
    tags: ["TEST ITEM", "TEST ITEM"]
  }

  public constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    this.contentService.getContent().subscribe(contentList => {
      this.sportContent = contentList;
    });
  }

  addSportToList(newSport: any): void {
    this.sportContent.push(newSport)
    this.sportContent = [...this.sportContent];
  }

  updateSportList(newSport: any): void {
    let sportIndex = this.sportContent.map(e => e.id).indexOf(newSport.id)
    this.sportContent[sportIndex] = newSport;
    this.sportContent = [...this.sportContent];
  }

  CheckContent(input: string): void {
    for (let i = 0; i < this.sportContent.length; i++) {
      if (this.sportContent[i].title === input) {
        console.log("There was a match! " + input + " was found.")
        break;
      } else {
        console.log("Sorry! " + input + " was not found.")
      }
    }
  }

}
