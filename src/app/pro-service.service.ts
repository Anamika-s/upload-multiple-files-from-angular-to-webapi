import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { ProjectComponent } from './project/project.component';
import { Project } from './project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProServiceService {

  constructor(private _http : HttpClient) { }
  baseUrl="http://localhost:5161/api/projects";
  GetProjects() : Observable<Project[]>
  {
    return this._http.get<Project[]>(this.baseUrl);
  }
  AddProject(req : Project)
  {
    console.log("in ser "+  JSON.stringify(req))
    console.log("Request Added.....")
    return this._http.post<Project>(this.baseUrl,
      JSON.stringify(req),{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',

           'Accept': 'application/json'
        })
      }
      
      
      
      
      
      
      )}


   
  
}
