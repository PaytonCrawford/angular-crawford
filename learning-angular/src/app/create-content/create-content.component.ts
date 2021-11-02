import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";
import { Content } from '../helper-files/content-interface';

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
  newSportItem!: Content;

  CreateContent(id: number, author: string, title: string, type: string, imgUrl: string, body: string): void {

    this.newSportItem = {
      id: id,
      author: author,
      type: type,
      title: title,
      imgUrl: imgUrl,
      body: body
    }

    this.newSportEvent.emit(this.newSportItem)

    let getItem = async function () {
      return Promise.resolve("Sports")
    }

    let getAllItems = async() => {
      return await Promise.all([getItem()])
    }

    let sportPromise = new Promise(async (success, fail) => {
      //this.newSportItem(author, type, title, body)
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
