import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { PipePipe } from './pipe.pipe';
import { DirectiveDirective } from './directive.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterContentPipe } from './filter-content.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from "./services/in-memory-data.service";
import { CreateComponent } from './create/create.component';
import { FormsModule } from "@angular/forms";
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
    MessagesComponent,
    CreateComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false, delay: 2000
        }),
      FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
