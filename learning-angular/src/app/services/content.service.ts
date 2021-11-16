import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {Observable, of} from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private contentService: ContentService) {

  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  getContent() : Observable<Content[]> {
    return this.http.get<Content[]>("api/CONTENT");
  }

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>("api/CONTENT", content, this.httpOptions);
  }

  updateContent(content: Content): Observable<any> {
    return this.http.put("api/CONTENT", content, this.httpOptions);
  }

}
