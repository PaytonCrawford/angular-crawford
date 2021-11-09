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

  public ngOnInit() {
    this.contentService.getContent().subscribe(sportService => this.sportContent = sportService);
  }

  save(): void {
    //Insert Message Service!!!
    this.contentService.addContent(this.contentItem).subscribe(content => this.sportContent.push(content));
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
