import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { CommontypeComponent } from './commontype/commontype.component';
import { CommentComponent } from './comment/comment.component';
import { DocumentComponent } from './document/document.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectComponent,
    CommontypeComponent,
    CommentComponent,
    DocumentComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
   
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
