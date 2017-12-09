import { Component, OnInit } from '@angular/core';
import { TrainingDetailService } from './training-detail.service'
import { TrainingDetail } from './training-detail'
import { DataService } from '../data.service';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css'],
  providers: [TrainingDetailService]
})
export class TrainingDetailComponent implements OnInit {
  
  Training: TrainingDetail[];
  Enroll: string;
  UserName:string;
  constructor(private _dataService: DataService,private sharedservice: SharedDataService,private trainingdetailservice: TrainingDetailService) {this.Enroll="Enroll" ;}

  /* function to fetch the trainings from the service */
  getTrainingDetails() {
    return this.trainingdetailservice.getTrainings();
  }
  ngOnInit() {
    this.sharedservice.currentMessage1.subscribe(message => this.UserName = message);    
    this.Training = this.getTrainingDetails();
  }
getdata1(res)
{

}
  public EnrollClick()
  {
    alert('You have been enrolled successfully!');
    this.Enroll="Enrolled";
    setTimeout(() => {
      this._dataService.saveEnroll(this.UserName).subscribe(res => this.getdata1(res));
    }, 1000);   
  }
}
