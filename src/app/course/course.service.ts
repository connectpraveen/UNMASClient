/* Service to manipulate all Course related data */
import { Injectable } from '@angular/core';
import { Course } from './course'

@Injectable()
export class CourseService {
COURSES: Course[]=[{id: 1 , courseName: 'SG1: Ammunition Support to UN Field Operations', scheduledDate:'Nov-23-2016',createdBy: 'UNMAS, Libya',thumbnailsrc:'../assets/images/thumbnail.jpg'},
                  {id: 2 , courseName: 'SG2: Small Unit Ammunition Stockpile Management', scheduledDate:'Nov-23-2016',createdBy: 'UNMAS, Libya',thumbnailsrc:'../assets/images/thumbnail.jpg'},
                  {id: 3 , courseName: 'SG3: Millitary Ammunition Stockpile Management', scheduledDate:'Nov-23-2016',createdBy: 'UNMAS, Libya',thumbnailsrc:'../assets/images/thumbnail.jpg'},
                  {id: 4 , courseName: 'SG4: Ammunition Accounting and Tracing', scheduledDate:'Nov-23-2016',createdBy: 'UNMAS, Libya',thumbnailsrc:'../assets/images/thumbnail.jpg'},
                  {id: 5 , courseName: 'SG5: UN Police Ammunition Tracing Support', scheduledDate:'Nov-23-2016',createdBy: 'UNMAS, Libya',thumbnailsrc:'../assets/images/thumbnail.jpg'},
                ];
    
 /* Function to fetch courses */
  getCourses(): Course[] {
    return this.COURSES;
  }
  
  /* Function to fetch courses depending on training id */
  getCourseName(id: number): string {
    return this.COURSES[0].courseName;
  }
  
  /* Function the fetch the number of courses in a training */
  getCourseCount(): number{
    return 5;
  }
  
  /* Function to fetch all courses */
  getAllCourses(): Course[] {
    return this.COURSES;
  }
  
  constructor() { }
}
