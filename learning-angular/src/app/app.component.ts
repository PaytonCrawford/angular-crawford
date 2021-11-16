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

  update(): void {
    this.sportContent[this.contentItem.id || 0] = this.contentItem;
    this.contentService.updateContent(this.contentItem).subscribe(() => {
      console.log("Content Updated!")
      //Insert Message Service!!!
    })
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
