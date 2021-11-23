import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from "../services/content.service";
import { MessageService } from "../services/message.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.scss']
})
export class ContentDialogComponent implements OnInit {

  @Output() addContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();
  newContent: Content;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<ContentDialogComponent>) {
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

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

}
