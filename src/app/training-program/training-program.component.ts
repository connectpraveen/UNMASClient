import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/course.service';
import { Router, ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../shared-data.service';
import { ScheduledProgramsService } from '../scheduled-programs/scheduled-programs.service'
import { ScheduledProgram } from '../scheduled-programs/scheduled-program'


@Component({
  selector: 'training-program',
  templateUrl: './training-program.component.html',
  styleUrls: ['./training-program.component.css'],
  providers: [CourseService, ScheduledProgramsService]
})
export class TrainingProgramComponent implements OnInit {
  /* variables used in this class*/
trainingid: number;
coursecount: number;
show = 'all-trainings';
trainingname: string;
Trainings: ScheduledProgram[];
  id: number; sub: any;
  selectedLink : string;
constructor( private courseservice: CourseService, private router: Router,
  private route: ActivatedRoute, private sharedservice: SharedDataService, private spservice: ScheduledProgramsService) { }
   
   /* function to fetch the number of courses */
 getCourseCount(): number  {
    return this.courseservice.getCourseCount();
  }
  
  /* function to fetch all the trainings */
  getAllTrainings(): ScheduledProgram[] {
    return this.spservice.getAllTrainings();
  }
    
 /* fetch training name from shared service */
getTrainingName(): string {
    return this.sharedservice.getTrainingName();
  }
  
  /* save the training name in the shared service */
 saveTrainingName(tname){
    this.sharedservice.saveTrainingName(tname);
  }
  
  /* save the selected link in the shared service*/
  saveSelectedLink(selectedlink : string){
   return this.sharedservice.saveSelectedLink(selectedlink);
  }
  
/* function invoked on Show Details button click */  
onShowDetails(trainingname,trainingid) {
this.saveTrainingName(trainingname);
this.show = 'training-program';
this.id = trainingid;
this.coursecount = this.getCourseCount();
this.trainingname = this.getTrainingName();
    this.router.navigate(['./training-program', this.id]);;
}
    
    ngOnInit() {
      this.selectedLink = this.sharedservice.getSelectedLink();
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
   if(this.selectedLink === 'all-trainings' && !this.id )
    this.Trainings = this.getAllTrainings();
    else if(this.id ){
    this.show = 'training-program'; 
    this.coursecount= this.getCourseCount();
    this.trainingname=this.getTrainingName();      
    this.sharedservice.saveSelectedLink(this.selectedLink);
    }
      } );
  }
}
