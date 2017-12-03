import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service'
import { Course } from './course'
import {SharedDataService} from '../shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CourseService]
  
})
export class CourseComponent implements OnInit {
  coursename: string;
  Courses: Course[];
  userRole : string;
  selectedLink : string;
  
  constructor(private courseservice: CourseService, private sharedservice: SharedDataService,
    private router: Router, private activated : ActivatedRoute) { }
  
/* Save course name in shared service to obtain it in the next page */ 
saveCourseName(coursename):void {
   return this.sharedservice.saveCourseName(coursename);
}

/*  Navigate to couse detail page on click of Show Details button */
onShowDetails(coursename,courseid) {
  this.saveCourseName(coursename);
  this.router.navigate(['./course-detail',courseid], {relativeTo: this.activated});
}
  
/* function to fetch the courses */
getCourses() {
   return this.courseservice.getCourses();
}
  
/* save link in shared service to highlight the selected link in left nav */
saveSelectedLink(selectedlink: string) {
   return this.sharedservice.saveSelectedLink(selectedlink);
  }
 

 ngOnInit() {
        this.Courses= this.getCourses();
   }
}
