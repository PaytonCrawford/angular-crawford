import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {Observable, of} from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService, private http: HttpClient) {

  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  getContent() : Observable<Content[]>{
    this.messageService.add("Content Retrieved!");
    return this.http.get<Content[]>("api/CONTENT");
  }

  getContentItem(id: number): Observable<Content> {
    console.log("Retrieving OBSERVABLE content item");
    return this.http.get<Content>("api/CONTENT/" + id);
  }

  postContent(newContent: Content): Observable<Content>{
    this.messageService.add("Content Added!");
    return this.http.post<Content>("api/CONTENT", newContent, this.httpOptions);
  }

  add(newContent: Content): Observable<any> {
    this.messageService.add("Content Added!");
    return this.http.put("api/CONTENT", newContent, this.httpOptions);
  }

}
