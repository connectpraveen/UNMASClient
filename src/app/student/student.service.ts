import { Injectable } from '@angular/core';
import { Student } from './student'
import { StudentDetails } from './students'

import { DataService } from '../data.service'

/* Service to manipulate the Student data */
@Injectable()
export class StudentService {
  training: Array<any>;
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

  saveStudents(name: string, email: string) {
    this._dataService.saveStudent(name, email)
      .subscribe(res => this.getdata(this.retVal = res));
  }
  getdata(data) {

  }
  constructor(private _dataService: DataService) {
    this._dataService.getTraining()
      .subscribe(res => this.gettraining(res));
  }

  public gettraining(result) {
    //console.log(res);
    let lessons = result.map(data => data.training_program);
    let lessionData = lessons[0].students;
    // setTimeout(() => {
    
    // }, 500);
    lessionData.forEach(element => {
      this.STUDENTDETAILS.push({ name: element.Name, email: element.Email });
    });

    // console.log(lessionData);
  }
}
