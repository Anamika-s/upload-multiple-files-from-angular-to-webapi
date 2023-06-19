import { Component, NgModule, OnInit } from '@angular/core';

import { ComService } from '../com.service';
import {FormBuilder, FormGroup, Validator} from '@angular/forms'
import { Comment } from '@angular/compiler';
import { comment } from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

constructor(private _ComService : ComService, private formBuilder : FormBuilder)
{

}
comments : any[]=[];
commentForm! : FormGroup;
ngOnInit(): void{
  this.buildForm();
  //comments : Comment[] =[];
  this._ComService.GetComment().subscribe(res=>
    {
      console.log(res)
      this.comments = res;
      console.log(this.comments.length)

    });
  
}
private  buildForm(): void {

  this.commentForm = this.formBuilder.group({ 

  // commentName: [null, Validators.required],

  //   CreatedBy: [null, Validators.required],
  });
}
commentss= new  comment();
AddComment() : void{
  if(this.commentForm.valid){

    this.commentss.commentName=this.commentForm.value.commentName;
    this.commentss.id=0;
    this.commentss.createdBy="ashvi"
    console.log(this.commentss)
    // this._ComService.AddComment(this.commentss).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }
 alert("Comment  has been added.")
}


}
