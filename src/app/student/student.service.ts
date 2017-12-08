import { Injectable } from '@angular/core';
import { Student } from './student'
import { StudentDetails } from './students'
import {SharedDataService} from '../shared-data.service';
import { DataService } from '../data.service'

/* Service to manipulate the Student data */
@Injectable()
export class StudentService {
  UserName:string;
  training: any;
  count = 0;
  retVal: any;
  STUDENTDETAILS: StudentDetails[] = [];
  STUDENTS: Student[] = [{
    id: 1, name: 'Don Miller', companyName: 'UNODA', companyPlace: 'New York, NY',
    status: 'Active', thumbnailsrc: '../assets/images/listperson.png', pic: '../assets/images/person-big.png', lastLogin: 'JAN-12-2016',
    trainingName: 'Training1', trainingStatus: 'enrolled'
  },
  {
    id: 2, name: 'Brenda', companyName: 'UNODA', companyPlace: 'New York, NY',
    status: 'Active', thumbnailsrc: '../assets/images/listperson.png', pic: '../assets/images/person-big.png', lastLogin: 'JAN-12-2016',
    trainingName: 'Training1', trainingStatus: 'active'
  },
  {
    id: 3, name: 'Don Miller', companyName: 'UNODA', companyPlace: 'New York, NY',
    status: 'Active', thumbnailsrc: '../assets/images/listperson.png', pic: '../assets/images/person-big.png', lastLogin: 'JAN-12-2016',
    trainingName: 'Training2', trainingStatus: 'inactive'
  },
  {
    id: 4, name: 'Don Miller', companyName: 'UNODA', companyPlace: 'New York, NY',
    status: 'Active', thumbnailsrc: '../assets/images/listperson.png', pic: '../assets/images/person-big.png', lastLogin: 'JAN-12-2016',
    trainingName: 'Training2', trainingStatus: 'completed'
  }

  ];

  /* fetches the students from the database */
  getStudents(): Student[] {
    return this.STUDENTS;
  }

  getTrainingData(): any {
    return this.training;
  }

  getStudentDetail(): StudentDetails[] {
    return this.STUDENTDETAILS;
  }
  /* fetches the students from the database by Id */
  getStudentById(id): Student {
    return this.STUDENTS[++id];
  }

  /* fetches the invited students from the database */
  getInvitedStudents(): Student[] {
    return this.STUDENTS;
  }

  /* fetches the students from the database by trainingstatus */
  getTrainingStudentCountByStatus(stat: string): number {
    this.count = 0;
    for (let i = 0; i < this.STUDENTS.length; i++) {
      if (this.STUDENTS[i].trainingStatus === stat)
        this.count++
    } return this.count;
  }
  public sendEmail(email) {
    this._dataService.sendEmailStudent(email).subscribe(res => this.getdata(this.retVal = res));
  }

  saveStudents(name: string, email: string, manageremail:string) {
    this._dataService.saveStudent(name, email,manageremail)
      .subscribe(res => this.getdata(this.retVal = res));
  }
  getdata(data) {

  }
  constructor(private _dataService: DataService,private sharedservice: SharedDataService) {
    this.sharedservice.currentMessage1.subscribe(message => this.UserName = message); 

    this._dataService.getTraining()
      .subscribe(res => this.gettraining(res));

             
  }

  public gettraining(result) {
    //console.log(res);
    let lessionData;
    let lessons = result.map(data => data.training_program);
    let x=lessons[0];
    
    if(this.sharedservice.getUserRole()!='admin')
    for(let i=0;i<x.length;i++)   
    {      
      if(x[i].program_manager_email==this.UserName)
      {                
        lessionData= x[i];             
        for( let j=0;j<lessionData.students.length;j++)
        {
          this.STUDENTDETAILS.push({ name: lessionData.students[j].Name, email: lessionData.students[j].Email,Registered: lessionData.students[j].Registered, Enrolled: lessionData.students[j].Enrolled });
        }
        
      }
    } 
    
    else
    {
      for(let i=0;i<x.length;i++)   
      {                         
          lessionData= x[i];             
          for( let j=0;j<lessionData.students.length;j++)
          {
            this.STUDENTDETAILS.push({ name: lessionData.students[j].Name, email: lessionData.students[j].Email,Registered: lessionData.students[j].Registered, Enrolled: lessionData.students[j].Enrolled  });
          }  
          break;                
      }       
    }
     
    //console.log(lessionData);
  }
}
