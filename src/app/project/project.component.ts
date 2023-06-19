import { Component, NgModule, OnInit } from '@angular/core';
import { ProServiceService } from '../pro-service.service';
import { Project } from '../project';
import { FormsModule } from '@angular/forms';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private _proService : ProServiceService, private formBuilder : FormBuilder)
  {

  }
  projects : Project[]=[];
  projectForm! : FormGroup;

  ngOnInit() : void{
    this.buildForm();
    this._proService.GetProjects().subscribe(res => 
      {
        console.log(res)
        this.projects=res;
        console.log(this.projects.length)
      });
  }
  private buildForm() : void{
    this.projectForm=this.formBuilder.group({
      projectName : [null, Validators.required],
      //CreatedBy: [null, Validators.required],

    });

  }
  projectss=new Project();
  AddProject() : void{
    if(this.projectForm.valid){

      this.projectss.projectName=this.projectForm.value.projectName;
      this.projectss.id=0;
      this.projectss.createdBy="ashvi"
      console.log(this.projectss)
      this._proService.AddProject(this.projectss).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    }
   alert("Project has been added.")
  }

}
