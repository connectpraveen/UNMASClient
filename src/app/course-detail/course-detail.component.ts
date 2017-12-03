import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../module/module.service'
import { CourseService } from '../course/course.service'
import { Course } from '../course/course'
import {ActivatedRoute, Router} from '@angular/router';
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  providers: [ModuleService, CourseService]
})
export class CourseDetailComponent implements OnInit {
  /* variables to store values */
  courseid: number;
  coursename: string;
  modulecount: number;
  show='all-courses';
  Courses : Course[];
  id: number; sub: any;
  
  constructor(private moduleservice: ModuleService, private router: Router, private courseservice: CourseService, private route: ActivatedRoute, private sharedservice: SharedDataService) {
  this.coursename = this.getCourseName();
  }
  
  /* function to fetch Course name from Shared Service */
  getCourseName(): string {
    return this.sharedservice.getCourseName();
  }
  
  /* function to fetch all the Courses from Course Service */
  getAllCourses(): Course[] {
    return this.courseservice.getAllCourses();
  }
  
  /* Get the number of modules for this course */
  getModuleCount() {
    return this.moduleservice.getModuleCount();
  }
  
  /* Save the selected course name in shared service */
  saveCourseName(coursename):void {
    return this.sharedservice.saveCourseName(coursename);
  }
  
  /* Navigate to course detail page on click of Show Details */
   onShowDetails(coursename,courseid){
     this.saveCourseName(coursename);
     this.show = 'course';
     this.id = courseid;
     this.modulecount= this.moduleservice.getModuleCount();
     this.router.navigate(['./course-detail', this.id]);
   }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; } );
    /* If id is passed as a param in url, show that course */
    if(this.route.snapshot.params.id){
      this.show = 'course';
      this.modulecount= this.moduleservice.getModuleCount();
    }/* else show all courses*/
    else{
      this.Courses = this.getAllCourses();
     this.sharedservice.saveSelectedLink('all-courses');
  }
 }
  
}
