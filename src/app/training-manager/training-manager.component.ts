import { Component, OnInit } from '@angular/core';
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
  constructor(private trainingmanagerservice: TrainingManagerService, private sharedservice: SharedDataService) { this.Enroll = "Enroll"; }

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
    if (this.email != "" && this.name != "") {      
      setTimeout(() => {
        this.trainingmanagerservice.saveEmail(this.email);
        this.trainingmanagerservice.saveName(this.name);
      }, 5000);

      if (this.trainingmanagerservice.getEmailUpdateStatus && this.trainingmanagerservice.getNameUpdateStatus) {
        this.isSaved = true;
        if (this.checkboxValue) {
          this.trainingmanagerservice.sendEmail(this.email);
          this.trainingmanagerservice.manageradd(this.email);
        }
      }
    }
  }
}
