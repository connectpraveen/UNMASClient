import { Component, OnInit } from '@angular/core';
import {DayService } from './day.service'
import {LessonService } from '../lesson/lesson.service'
import {Day} from './day'
import {Lesson} from '../lesson/lesson'
import { TrainingDetailService } from '../training-detail/training-detail.service'
import { TrainingDetail } from '../training-detail/training-detail'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'course-detail',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  providers: [DayService, LessonService, TrainingDetailService]
})
  
export class DayComponent implements OnInit {
/* variables used in this class */
DAYS: Day[]=[{id:1,title:'Day 1', lessonId:['1','2','3','4','5','6']}];
LESSONS: Lesson[];
selectedDay: Day;
Training: TrainingDetail[];
css= 'nav-link';

  /* This method fetches Days from Day Service */
constructor(private dayservice: DayService, private router: Router,
  private lessonservice: LessonService,private trainingdetailservice: TrainingDetailService, private route: ActivatedRoute) { }
  getDays(): Day[] {return this.dayservice.getDays();
  }

ngOnInit() {
    /* Fetch the training details */
    this.Training = this.getTrainingDetails();
    /* Fetch the number of days */
    // 
    //console.log(this.DAYS);
   // console.log('Length='+this.DAYS.length);    
    if(this.DAYS.length> 0){
    this.selectedDay= this.DAYS[0];
       if(this.selectedDay.lessonId.length > 0) {
         this.LESSONS = this.lessonservice.getLessonsById(this.selectedDay.lessonId);
       }
    }

    this.DAYS = this.getDays(); 
  }

/* function to fetch the trainings from Training Detail Service */
getTrainingDetails() {
    return this.trainingdetailservice.getTrainings();
}
  
/* Function to invoke when a particular day is clicked*/
onClicked(day): void {
  /* Make clicked day as Selected Day */
  this.selectedDay = day;
  //this.css = 'navitemselected';
  if(this.selectedDay.lessonId.length > 0) {
    this.LESSONS = this.lessonservice.getLessonsById(this.selectedDay.lessonId);
   }
  this.router.navigate(['../',this.selectedDay.id], {relativeTo: this.route});
  }

}

