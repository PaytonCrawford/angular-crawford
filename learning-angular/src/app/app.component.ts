import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContentCardComponent} from "./content-card/content-card.component";
import { Content } from "./helper-files/content-interface"
import { ContentService } from './services/content.service';
import {MessageService} from "./services/message.service";
import {RouterModule} from "@angular/router";
import {ContentDetailComponent} from "./content-detail/content-detail.component";
import {ContentListComponent} from "./content-list/content-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";

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

  constructor(private contentService: ContentService, private messageService: MessageService) {
    this.newContent = {
      author: '',
      title: '',
      body: '',
      type: '',
      tags: ['']
    };
    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent },
      { path: 'content', component: ContentListComponent },
      { path: '**', component: NotFoundComponent },
    ])
  }

  public ngOnInit() {
    this.contentService.getContent().subscribe(sportService => this.sportContent = sportService);
  }

  // save(): void {
  //   //Insert Message Service!!!
  //   this.contentService.addContent(this.contentItem).subscribe(content => this.sportContent.push(content));
  // }
  //
  // update(): void {
  //   this.sportContent[this.contentItem.id || 1] = this.contentItem;
  //   this.contentService.updateContent(this.contentItem).subscribe(() => {
  //     console.log("Content Updated!")
  //     //Insert Message Service!!!
  //   })
  // }

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

  @Output() addContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();
  newContent: Content;
  tempId!: string;
  tempTags!: string;

  addSport(): void {
    this.newContent.tags = this.tempTags.split(",");
    this.contentService.postContent(this.newContent).subscribe(newSport => {
      this.messageService.add("Added sport content has the ID of: " + newSport.id);
      this.newContent = {
        author: '',
        title: '',
        body: '',
        type: '',
        tags: ['']
      };
      this.tempTags = "";
      this.addContentEvent.emit(newSport)
    });
  }

  updateSport(): void {
    this.newContent.tags = this.tempTags.split(",");
    this.newContent.id = parseInt(this.tempId);
    this.contentService.postContent(this.newContent).subscribe(() => {
      this.messageService.add("Updated sport content at id: " + this.newContent.id);
      this.tempTags = "";
      this.tempId = "";
      this.updateContentEvent.emit(this.newContent);
      this.newContent = {
        author: '',
        title: '',
        body: '',
        type: '',
        tags: ['']
      };
    });
  }

}
