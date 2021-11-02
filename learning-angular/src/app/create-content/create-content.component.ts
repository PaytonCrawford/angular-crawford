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
  newSportItem: any;

  CreateContent(id: string, author: string, type: string, name: string, body: string): void {

    let getItem = async function () {
      return Promise.resolve("Sports")
    }

    let getAllItems = async() => {
      return await Promise.all([getItem()])
    }

    this.newSportEvent.emit(this.newSportItem)

    let sportPromise = new Promise(async (success, fail) => {
      this.newSportItem(id, author, type, name, body)
      let displayItems = await getAllItems();
      if (displayItems) {
        success("Success, Items Found!");
      }
      else {
        fail("Fail, Items Not Found.");
      }
    });

    sportPromise.then(function (successResult) {
      console.log("Success, Items Found! - Success Method ", successResult)
    }).catch(failure => {
      console.log("Failure, Items Not Found! ", failure)
    })

  }

}
