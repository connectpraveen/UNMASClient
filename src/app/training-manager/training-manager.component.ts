import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingManagerService } from './training-manager.service'
import { TrainingManager } from './training-manager'
import { SharedDataService } from '../shared-data.service';
import { TrainingDetail } from '../training-detail/training-detail'
@Component({
  selector: 'training-manager',
  templateUrl: './training-manager.component.html',
  styleUrls: ['./training-manager.component.css'],
  providers: [TrainingManagerService]
})
export class TrainingManagerComponent implements OnInit {

  Enroll: string;
  checkboxValue: boolean = true;
  name: string="";
  email: string="";
  isSaved: boolean = false;
  Training: TrainingDetail[];
  program:TrainingDetail;
  trainingname:string;
  programname:string;
  startdate:string;
  enddate:string;
  managername:string;
  manageremail:string;
  SaveValue:string="Save";
  constructor(private router: Router,private trainingmanagerservice: TrainingManagerService, private sharedservice: SharedDataService) { this.Enroll = "Enroll"; }

  /* function to fetch the trainings from the service */
  getTrainingDetails() {
    return this.trainingmanagerservice.getTrainings();

  }
  ngOnInit() {
    this.Training = this.getTrainingDetails();
    this.program=this.Training[0];
    //console.log(this.program);
    this.saveSelectedLink('students');

  }
  saveSelectedLink(selectedlink: string) {
    return this.sharedservice.saveSelectedLink(selectedlink);
  }
  Save() {    
   
    this.SaveValue="Saving... Please wait...";
      setTimeout(() => {
        this.trainingmanagerservice.saveProgram(this.programname, this.startdate,this.enddate,this.managername,this.manageremail);
        // this.trainingmanagerservice.saveName(this.name);
        
      }, 5000);

      setTimeout(() => {
        this.router.navigate(['dashboard']);
        // this.trainingmanagerservice.saveName(this.name);
      }, 5000);

      
    
  }
}
