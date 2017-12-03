import { Component, OnInit } from '@angular/core';
import { TrainingDetailService } from './training-detail.service'
import { TrainingDetail } from './training-detail'

@Component({
  selector: 'training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css'],
  providers: [TrainingDetailService]
})
export class TrainingDetailComponent implements OnInit {
  
  Training: TrainingDetail[];
  Enroll: string;
  constructor(private trainingdetailservice: TrainingDetailService) {this.Enroll="Enroll" ;}

  /* function to fetch the trainings from the service */
  getTrainingDetails() {
    return this.trainingdetailservice.getTrainings();
  }
  ngOnInit() {
    this.Training = this.getTrainingDetails();
  }

  public EnrollClick()
  {
    alert('You have been enrolled successfully!');
    this.Enroll="Enrolled";
  }
}
