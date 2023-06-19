import { Component, NgModule, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { commontype } from '../commontype';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-commontype',
  templateUrl: './commontype.component.html',
  styleUrls: ['./commontype.component.css']
})
export class CommontypeComponent implements OnInit {

  constructor(private _CommonService : CommonServiceService, private formBuilder : FormBuilder)
  {

  }
  commontypes : commontype[]=[];
  commonForm! : FormGroup;
  ngOnInit() : void{
    this.buildForm();
    this._CommonService.GetCommon().subscribe(res=>{
      console.log(res)
      this.commontypes=res;
      console.log(commontype)
      console.log(this.commontypes.length)
    });
  }
  
  private buildForm(): void{
    this.commonForm= this. formBuilder.group({
      Type : [null, Validators.required],
      CreatedBy: [null, Validators.required],
  

    })
  }
    
}

  

