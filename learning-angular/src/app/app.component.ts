import {Component, OnInit} from '@angular/core';
import {ContentCardComponent} from "./content-card/content-card.component";
import {Content} from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'learning-angular';

  public ngOnInit() {
    contentList: [] = [{

    }]
  }

  CheckContent() {
    console.log("Hello")
  }

}
