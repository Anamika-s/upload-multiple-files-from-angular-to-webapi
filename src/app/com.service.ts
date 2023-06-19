import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Comment } from '@angular/compiler';
import { Observable }  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComService {

  constructor(private _http : HttpClient) { }
  baseUrl="http://localhost:5161/api/comments";
  GetComment() : Observable<Comment[]>
  {
    return this._http.get<Comment[]>(this.baseUrl); 
  }
  AddComment(req: Comment)
  {
    console.log("in ser  " + JSON.stringify(req))

    console.log("Request Addded....")


     return this._http.post<Comment>(this.baseUrl,

       JSON.stringify(req), {

         headers: new HttpHeaders({

           'Content-Type': 'application/json',

           'Accept': 'application/json'

         })

       }

     )
  }
}
