import { Injectable } from '@angular/core';
import { Chapter } from './chapter'
import { DataService } from '../data.service'
/* Chapter Service to do Chapter data related functions */
@Injectable()
export class ChapterService {
  ChaptersArray:Chapter[];
  users: Array<any>;  
  isDataAvailable:boolean = false;
 CHAPTERSLession1: Chapter[]=[];
  
 /* Fetches all the Chapters from database */
//  getChaptersLession1(): Chapter[] {
//     return this.CHAPTERSLession1;
//   }
//   getChaptersLession2(): Chapter[] {
//     return this.CHAPTERSLession2;
//   }
 
//   getChaptersLession3(): Chapter[] {
//     return this.CHAPTERSLession3;
//   }
 
//   getChaptersLession4(): Chapter[] {
//     return this.CHAPTERSLession4;
//   }
 
//   getChaptersLession5(): Chapter[] {
//     return this.CHAPTERSLession5;
//   }
 
//   getChaptersLession6(): Chapter[] {
//     return this.CHAPTERSLession6;
//   }
 
 
 constructor(private _dataService: DataService){
  // this._dataService.getUsers()
  // .subscribe(res => this.getdata(this.users = res));  
 }
 public getdata(result)
 {
   //console.log(res);
  //  let lessons = result.map(data => data.catalogue[0].UNMASTraining[0].courses[0].modules[0].lessons[0].chapters);  
  //  let lessionData=lessons[0];   
  //  lessionData.forEach(element => {       
  //   this.CHAPTERS.push({id: element.id ,name:element.name, chapterType: element.type, title: element.title, path: element.path, body: element.body, thumbnail:''});

  //  });        
  //  this.isDataAvailable=true;
 }
 /*Fetch chapter with a particular id */ 
//  getChaptersById(Ids): Chapter {   
//     this.ChaptersArray= this.getChaptersLession1();
//     Ids=Ids-1;
//     return this.ChaptersArray[Ids];
//   }
  
 }
