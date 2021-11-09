import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {Observable, of} from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) {

  }

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>("api/CONTENT");
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>("api/content", content, this.httpOptions);
  }

}
