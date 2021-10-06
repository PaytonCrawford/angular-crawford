import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { PipePipe } from './pipe.pipe';
import { DirectiveDirective } from './directive.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterContentPipe } from './filter-content.pipe';
import {FormsModule} from "@angular/forms";
import { HoverStyleDirective } from './hover-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    PipePipe,
    DirectiveDirective,
    ContentCardComponent,
    ContentListComponent,
    FilterContentPipe,
    HoverStyleDirective,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
