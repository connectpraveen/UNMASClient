import { Component, OnInit } from '@angular/core';
import { ScheduledProgramsService } from '../scheduled-programs/scheduled-programs.service'
import { ScheduledProgram } from '../scheduled-programs/scheduled-program'
import { Router, ActivatedRoute } from '@angular/router';
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'] ,
  providers: [ScheduledProgramsService]
})
export class CompletedComponent implements OnInit {
CompletedPrograms : ScheduledProgram[];
  constructor(private spservice: ScheduledProgramsService,  private router: Router, 
    private sharedservice: SharedDataService, private activated : ActivatedRoute) { }

  /* function to fetch the inprogress training programs from the service for program coordinator  */
   getCompletedTrainingPrograms() {
    return this.spservice.getCompletedTrainingPrograms();
  }
  
  
  /* save the training name in shared service to fetch by other component */
 saveTrainingName(trainingname):void {
    return this.sharedservice.saveTrainingName(trainingname);
  }
  
   /* function when Show Details button is clicked */ 
onShowDetails(trainingname,trainingid){
  this.saveTrainingName(trainingname);
  this.router.navigate(['./training-program',trainingid], {relativeTo: this.activated});
}
  
  ngOnInit() {
    this.CompletedPrograms = this.getCompletedTrainingPrograms();
  }

}
