import { Component, OnInit } from '@angular/core';
import {ContentService} from "../services/content.service";
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  sportService: Content[] = [];

  constructor(private contentService: ContentService) {

  }

  public ngOnInit(): void {
    this.contentService.getContentObs().subscribe(sportService => this.sportService = sportService);
  }

  CheckContent(input: string): void {
    for (let i = 0; i < this.sportService.length; i++) {
      if (this.sportService[i].title === input) {
        console.log("There was a match! " + input + " was found.")
        break;
      } else {
        console.log("Sorry! " + input + " was not found.")
      }
    }
  }

}
