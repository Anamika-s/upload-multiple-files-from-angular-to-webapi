import { Injectable } from '@angular/core';
import { Document } from './document';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { a } from  './document/document.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  constructor(private _http : HttpClient) { }
  baseUrl="http://localhost:5161/api/documents/upload/";
  GetDocuments() : Observable<Document[]>
  {
    return this._http.get<Document[]>(this.baseUrl);
  }
  AddDocuments(req : FormData)
  {
     return this._http.post<Document>(this.baseUrl,req);


      
     }

  
}
