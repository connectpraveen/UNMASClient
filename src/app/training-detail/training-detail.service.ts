import { Injectable } from '@angular/core';
import { TrainingDetail } from './training-detail'
import { DataService } from '../data.service'
/* Service to manipulate the Trainings */
@Injectable()
export class TrainingDetailService {
  isDone:boolean=false;
  training: Array<any>;  
  TRAINING: TrainingDetail[]=[];
   
   /* get the trainings from the database */
   getTrainings(): TrainingDetail[] {
    return this.TRAINING;
  }
  
  constructor(private _dataService: DataService) {this._dataService.getTraining()
    .subscribe(res => this.getdata(this.training = res));      }

    public getdata(result)
    {
      //console.log(res);
      let lessons = result.map(data => data.training_program);        
      let lessionData=lessons[0];         
      this.TRAINING.push({id: lessionData.id , trainingName: lessionData.name, trainingMonth: 'Dec 2017',trainingFromDate:lessionData.start_date,
      trainingToDate:lessionData.end_date, trainingPlace: 'Libya', body:lessionData.about,courseCount: 1, examCount: 1, quizCount: 1, 
      courseContent:lessionData.course});      
    }
}
