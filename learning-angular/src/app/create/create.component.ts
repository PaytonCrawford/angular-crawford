import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from "../services/content.service";
import { MessageService } from "../services/message.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ContentDialogComponent} from "../content-dialog/content-dialog.component";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output() addContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();
  newContent: Content;
  tempId!: string;
  tempTags!: string;



  constructor(private dialog: MatDialog, private contentService: ContentService, private messageService: MessageService) {
    this.newContent = {
      author: '',
      title: '',
      body: '',
      type: '',
      tags: ['']
    };
  }

  ngOnInit(): void {
  }

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

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ContentDialogComponent, dialogConfig)
    const dialogRef = this.dialog.open(ContentDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
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
