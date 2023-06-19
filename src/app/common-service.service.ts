import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommontypeComponent } from './commontype/commontype.component';
import { commontype } from './commontype';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private _http : HttpClient) { }
  baseUrl="http://localhost:5161/api/commonTypeRefs";
  GetCommon() : Observable<commontype[]>
  {
    return this._http.get<commontype[]>(this.baseUrl);
  }
  AddCommon(req : commontype)
  {
    console.log("in ser  " + JSON.stringify(req))
    console.log("Request Addded....")
    return this._http.post<commontype>(this.baseUrl,
      JSON.stringify(req),{
        headers: new HttpHeaders({

          'Content-Type': 'application/json',

          'Accept': 'application/json'

        })
      }
     
    
      ) }
}
