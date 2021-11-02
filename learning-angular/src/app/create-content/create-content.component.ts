import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";
import {Content} from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  @Output() newSportEvent = new EventEmitter<Content>();
  newSportItem: Content | undefined;

  CreateContent(): void { //id: string, author: string, image: string, name: string, body: string
    this.newSportEvent.emit(this.newSportItem)
    let sportPromise = new Promise((success, fail) => {

    });
  }

}
