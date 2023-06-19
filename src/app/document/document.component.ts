import { Component, NgModule, OnInit } from '@angular/core';
import { DocumentServiceService } from '../document-service.service';
import { Document } from '../document';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class a{
    id : number=0;
    name : string="";
    file:any
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  constructor(private _DocService : DocumentServiceService, private formBuilder : FormBuilder){

  }

  documents : Document[]=[];
  // document1 : Document={
  //   id:45,
  //   adharPath : "abc",
  //   visaPath :  "abc",
  //   passportPath :  "abc",
  //   ticketid :"kju",
  //   ticketPath :  "abc",
  //  createdBy:"ashvi",
  //   createdDate:"2023-06-14 16:59:34.2666667",
  //  modifiedBy:"lkj",
  //   modifiedDate:"2023-06-14 16:59:34.2666667",
  //   isActive:true
  // };
  documentForm! : FormGroup;
  ngOnInit(): void {
    // this.buildForm();
    this._DocService.GetDocuments().subscribe(res=>{
      console.log(res)
      this.documents=res;
      console.log(this.documents)
    });
  }
  // // private buildForm() : void{
  // //   this.documentForm=this.formBuilder.group({
  // //     CreatedBy: [null, Validators.required],
  // //     file : []
  // //   });
  // }
  
  private buildForm() : void{
    this.documentForm=this.formBuilder.group({
      id: [0, [Validators.required]],
      name : ["", [Validators.required]],
      file :[]
    });
  }
//   document=new Document();
//   AddDocuments(): void {
// alert("a")
//       // if (this.documentForm.valid) {
// console.log("a")
//        this.document.adharPath=this.documentForm.value.adharPath;
//       //  this.document.visaPath=this.documentForm.value.visaPath;
//       //  this.document.passportPath=this.documentForm.value.passportPath;
      
//       //  this.document.ticketPath=this.documentForm.value.ticketPath;
//       //  this.document.createdBy="Ashvi";
//       //  this.document.ticketid="6248632984693";

//         console.log(this.document)
//         this._DocService.AddDocuments(this.document).subscribe(
//           (response) => {
//             console.log(response);
           
//           },
//           (error) => {
//             console.error(error); 
//           }
//         );
      
//   }
       
     
 formData = new FormData();
    AddDocument(docForm : any) {
       
      const data = {
        id:0,
        isActive:true

    };
 this.formData.append('passportPath', docForm.controls.passportPath.value);
      this.formData.append('visaPath',docForm.controls.visaPath.value);
      this.formData.append('aadharPath', docForm.controls.aadharPath.value);
      console.log("Ad" + this.formData.get('adharPath'))
      this.formData.append('createdBy',"ajay");
       
         this.formData.append('aadhar' , this.selectedFile);
        this.formData.append('visa' , this.selectedFile2);
        this.formData.append('passport' , this.selectedFile3);
      this.formData.append('data', JSON.stringify(data))
       this._DocService.AddDocuments(this.formData).subscribe(res =>
        console.log("Res"+ res)
      )
       

     }
     
      selectedFile: any;
      selectedFile2: any;
      
      selectedFile3: any;
      
      onFileChange1(event: any) {
    
        this.selectedFile = <File>event.target.files[0]; // this.fileName = file.name;
      }
      

    
       onFileChange2(event: any) {
    
        this.selectedFile2 = <File>event.target.files[0]; // this.fileName = file.name;
       // this.fileName = file.name;
        
     console.log(this.selectedFile2)
     
    
      }
      onFileChange3(event: any) {
    
        this.selectedFile3 = <File>event.target.files[0]; // this.fileName = file.name;
      
        // this.fileName = file.name;
        
     console.log(this.selectedFile3)
     
    
      }
    }


  