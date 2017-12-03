import { Injectable } from '@angular/core';
import { Lesson } from './lesson'
import { Chapter } from '../chapter/chapter'
import { DataService } from '../data.service'

/* Service to manipulate Lesson Data */
@Injectable()
export class LessonService {
  Ids: number[];
  static LESSONS: Lesson[]=[];
  static CHAPTERS: Chapter[]=[];
  ChaptersArray:Chapter[];
  users: Array<any>;  
  /* Function to get the lessons from the database */
  getLessons(): Lesson[] {
    return LessonService.LESSONS;
  }
  
  getChapters(): Chapter[] {
    return LessonService.CHAPTERS;
  }
  
  /* Function to get the lessons by Lesson Ids */
  getLessonsById(Ids): Lesson[]{

   return LessonService.LESSONS;
   
   }
  
  /* Function to get a lesson by Lesson Id */
  getLesson(id) {

    return LessonService.LESSONS[0];

  }
  
  constructor(private _dataService: DataService) { 
    this._dataService.getUsers()
    .subscribe(res => this.getdata(this.users = res));     
  }
  public getdata(result)
  {    
    let lessons = result.map(data => data.catalogue[0].UNMASTraining[0].courses[0].modules[0].lessons);  
    let lessionData=lessons[0];
   // console.log(lessionData);   
      lessionData.forEach(element => {    
        if(LessonService.LESSONS.length<6)    
      LessonService.LESSONS.push({id: element.id , lessonType: element.lessiontype, title: element.title, path: element.video, body: element.body, thumbnail:'../assets/images/thumbnail.jpg', chapters:element.chapters});              
   });           
   LessonService.LESSONS.forEach(element => {       
    element.chapters.forEach(element => {      
      LessonService.CHAPTERS.push(element);
    });
   
  });  
}      

   getChaptersById(Ids): Chapter {   
    this.ChaptersArray= this.getChapters();
    Ids=Ids-1;
    return this.ChaptersArray[Ids];
  }
}
