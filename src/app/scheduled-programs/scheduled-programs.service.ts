import { Injectable } from '@angular/core';
import { ScheduledProgram } from './scheduled-program'

/* service to manipulate the scheduled programs */
@Injectable()
export class ScheduledProgramsService {
PROGRAMS: ScheduledProgram[]=[{id: 1 , trainingName: 'Training1', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'A Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg', studentCount:25 , status: 'inprogress'},
      {id: 2 , trainingName: 'Training2', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Second Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:20, status: 'completed'},
      {id: 3 , trainingName: 'Training3', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Third Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:35, status: 'completed'},
      {id: 4 , trainingName: 'Training4', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Third Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:15, status: 'inprogress'},
      {id: 5 , trainingName: 'Training5', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Third Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:5, status: 'completed'},
      {id: 6 , trainingName: 'Training6', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Third Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:32, status: 'completed'},
      {id: 7 , trainingName: 'Training7', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Third Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:27, status: 'completed'},
      {id: 8 , trainingName: 'Training8', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Third Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:15, status: 'scheduled'},
      {id: 9 , trainingName: 'Training9', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Third Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:9, status: 'inprogress'},
      {id: 10 , trainingName: 'Training10', trainingFromDate:'Dec-12-2016',trainingToDate:'Jan-12-2016',
      title:'Third Training Program',thumbnailsrc:'../assets/images/thumbnail.jpg' , studentCount:29, status: 'scheduled'}
];
  
  /* get the scheduled programs from database */
  getScheduledPrograms(): ScheduledProgram[] {
    return this.PROGRAMS;
  }
  
  /* get the scheduled programs from database for program coordinator */
   getAssignedScheduledPrograms(): ScheduledProgram[] {
    return this.PROGRAMS.slice(0,1);
  }
  
  /* function to fetch the inprogress training programs from the service for program coordinator  */
   getInprogressTrainingPrograms() {
    return this.PROGRAMS.slice(5,9);
  }
  
   /* function to fetch the completed training programs from the service for program coordinator  */
   getCompletedTrainingPrograms() {
    return this.PROGRAMS.slice(2,7);
  }
  
  /* get the training program name for a particular scheduled program */
   getScheduledProgramName(id:number):string{
    return this.PROGRAMS[0].trainingName;
  }
  
  /* get all the trainings */
   getAllTrainings(): ScheduledProgram[] {
    return this.PROGRAMS;
  }
 
  constructor() { }
}
