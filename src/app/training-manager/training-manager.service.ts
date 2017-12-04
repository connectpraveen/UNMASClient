import { Injectable } from '@angular/core';
import { TrainingManager } from './training-manager'
import { TrainingDetail } from "../training-detail/training-detail"
import { DataService } from '../data.service'
/* Service to manipulate the Trainings */
@Injectable()
export class TrainingManagerService {
  isDone: boolean = false;
  training: Array<any>;
  emailService: any;
  nameService: any;
  IsEmailSaved: boolean = false;
  IsNameSaved: boolean = false;
  TRAINING: TrainingDetail[]=[];
  /* get the trainings from the database */
  users: any;
  constructor(private _dataService: DataService) {
    this._dataService.getTraining()
    .subscribe(res => this.getdata(this.training = res));      
  }
  public getdata(result)
  {
    let lessons = result.map(data => data.training_program);        
    let lessionData=lessons[0];         
    this.TRAINING.push({id: lessionData.id , trainingName: lessionData.name, trainingMonth: 'Dec 2017',trainingFromDate:lessionData.start_date,
    trainingToDate:lessionData.end_date, trainingPlace: 'Libya', body:lessionData.about,courseCount: 1, examCount: 1, quizCount: 1, 
    courseContent:lessionData.course});      
  }
  getTrainings(): TrainingDetail[] {
    return this.TRAINING;
  }
  public saveEmail(email) {
    this._dataService.saveEmail(email).subscribe(res => this.getemailService(this.emailService = res));
  }

  public manageradd(email) {
    this._dataService.manageradd(email).subscribe(res => this.getemailService(this.emailService = res));
  }

  public sendEmail(email) {
    this._dataService.sendEmail(email).subscribe(res => this.getemailService(this.emailService = res));
  }

  public getemailService(emailService) {
    this.IsEmailSaved = true;
  }
  public saveName(name) {
    this._dataService.saveName(name).subscribe(res => this.getnameService(this.nameService = res));;
  }

  public saveProgram(programname, startdate,enddate,managername,manageremail) {
    this._dataService.saveProgram(programname, startdate,enddate,managername,manageremail).subscribe(res => this.getnameService(this.nameService = res));;
  }
  public getnameService(nameService) {
    this.IsNameSaved = true;
  }

  public getEmailUpdateStatus()
  {
    return this.IsEmailSaved;
  }
  public getNameUpdateStatus()
  {
    return this.IsNameSaved;
  }
}
