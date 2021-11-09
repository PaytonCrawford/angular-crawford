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

  sportService: Content[] = [];

  public constructor(private contentService: ContentService) {
  }

  public ngOnInit() {
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
