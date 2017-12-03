import { Component, OnInit, Input } from '@angular/core';
import {ChapterService } from './chapter.service'
import { Chapter } from './chapter'
import {ActivatedRoute, ParamMap, Router} from '@angular/router';


@Component({
  selector: 'chapter-list',
  templateUrl : './chapter.component.html',
  styleUrls : ['./chapter.component.css'],
  providers: [ChapterService]
})
  export class ChapterComponent implements OnInit {
  chapters: Object= [];
  constructor(private chapterservice: ChapterService,private route: ActivatedRoute ) { }
  
  /* Invoke the getChapters function of Chapter Service and fetch all the chapters  */
  // getChaptersLession1() {
  // this.chapterservice.getChaptersLession1();
  // }
  // getChaptersLession2() {
  //   this.chapterservice.getChaptersLession2();
  // }
  // getChaptersLession3() {
  //   this.chapterservice.getChaptersLession3();
  // }
  // getChaptersLession4() {
  // this.chapterservice.getChaptersLession4();
  // }
  // getChaptersLession5() {
  // this.chapterservice.getChaptersLession5();
  // }
  // getChaptersLession6() {
  // this.chapterservice.getChaptersLession6();
  // }
  
  ngOnInit() {
    // this.getChaptersLession1();
    // this.getChaptersLession2();
    // this.getChaptersLession3();
    // this.getChaptersLession4();
    // this.getChaptersLession5();
    // this.getChaptersLession6();
  }
}



