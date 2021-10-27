import { Component, OnInit } from '@angular/core';

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

  CreateContent(id: string, author: string, image: string, name: string, body: string) {
    let sportPromise = new Promise((success, fail) => {
      
    });
  }

}
