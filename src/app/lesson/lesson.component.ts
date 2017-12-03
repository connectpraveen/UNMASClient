import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Location} from '@angular/common';
import { FormGroup } from '@angular/forms';
import {LessonService } from './lesson.service'
import {ChapterService } from '../chapter/chapter.service'
import { Lesson } from './lesson'
import { Chapter } from '../chapter/chapter'
import { QuestionBase } from '../question-bank/question-base';
import { QuestionService } from '../question-bank/question.service';
import { QuizQuestionDataService } from '../question-bank/quiz-question-data.service';
import { AssignmentDataService } from '../question-bank/assignment-data.service';
import { ExamDataService } from '../question-bank/exam-data.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

 export interface IWindow extends Window{
        SpeechSynthesisUtterance: any;
        SpeechSynthesis: any;
    }

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  providers: [LessonService, ChapterService, QuestionService, QuizQuestionDataService, AssignmentDataService, ExamDataService]
})

export class LessonComponent implements OnInit {
  /* variables used in this component */
  @Input() questions: QuestionBase<any>[]= [ ];
  form: FormGroup;
  lesson: string;
  path;
  url: SafeResourceUrl;
  /* Make default css as nav-link for all lessons */
  css= 'nav-link';
  LESSONS: Lesson[]=[];
  CHAPTERS: Chapter[]=[];
  selectedLesson: Lesson;
  selectedChapter: Chapter;
   voices: any[];
  speed: number;
  voice:string;
  prog_index=0;  
  constructor(private edservice: ExamDataService, private qqdservice: QuizQuestionDataService,private adservice: AssignmentDataService, 
    private qcs: QuestionService, private lessonservice: LessonService,private chapterservice: ChapterService,
    public sanitizer: DomSanitizer,private route: ActivatedRoute, private location: Location,private router: Router) {}
  
ngOnInit() {
       /* empty the queue of speech synthesis */
    if(window.speechSynthesis)
      window.speechSynthesis.cancel();
    
    /* populate the dropdown with voices */
    this.voices = window.speechSynthesis.getVoices();
    this.voice = this.voices[0]
    this.speed=0;
    
  /* if parameter in url is quiz, show quiz questions */
    if(this.route.snapshot.params.id === 'quiz') {
    this.onClickedQuiz();
     }
     else{       
  /*Fetch the lesson depending on lesson clicked in Course Details Page*/
     this.selectedLesson = this.lessonservice.getLesson(this.route.snapshot.params.id);   
     this.onClickedLesson(this.selectedLesson);
      }
  this.getLessons();
   }  
  
 /* function to get the lessons froms Lesson Service */
 getLessons(): void {
    this.LESSONS=this.lessonservice.getLessons();
  }

  getChaptersLession(id): void {    
    this.CHAPTERS=this.lessonservice.getLessons()[id-1].chapters;     
  } 
  /* function invoked any lesson is clicked*/
 onClickedLesson(clickedlesson): void {   
  this.lesson = clickedlesson.lessonType;
     if(this.lesson==='voicetotext')
       this.voices = window.speechSynthesis.getVoices();
  /* Make clicked lesson as Selected Lesson*/ 
  this.selectedLesson= clickedlesson;    
 
  this.getChaptersLession(this.selectedLesson.id);
  //console.log(this.CHAPTERS);
  
  this.selectedChapter= this.lessonservice.getChaptersById(clickedlesson.id);
  this.path = this.selectedChapter.path;
  /* Make this Url safe */
  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedChapter.path);
  this.css = 'navitemselected';
   this.router.navigate(['../',this.selectedLesson.id], {relativeTo: this.route});
 }
  
  /* Display the quiz questions when Quiz link is selected */
  onClickedQuiz() {
    this.lesson='quiz';
    this.questions=this.qqdservice.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
    this.router.navigate(['../',this.lesson], {relativeTo: this.route});
  }
  
  /* Function invoked when the quiz is submitted */
  onSubmitQuiz() {
    this.lesson = this.selectedLesson.lessonType; 
  }
  
  /* Function invoked when a user clicks Cancel in Quiz page */
  onCancelQuiz(){
  this.lesson = this.selectedLesson.lessonType;
  }
    
  /* Function invoked when the assignments link is selected*/
  onClickedAssignment() {
    this.lesson='assignment';
    this.questions=this.adservice.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
    this.router.navigate(['../',this.lesson], {relativeTo: this.route});
  }
  
  /* Function invoked when the assignment is submitted */
  onSubmitExercises(){
    this.lesson = this.selectedLesson.lessonType;
  }
  
  /* Function invoked when a user clicks Cancel in Exercises page */
  onCancelExercises(){
    this.lesson = this.selectedLesson.lessonType;
  }
  
  /* Function invoked when the Exams link is selected*/
  onClickedExam() {
    this.lesson='exam';
    this.questions=this.edservice.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
    this.router.navigate(['../',this.lesson], {relativeTo: this.route});
  }
  
  /* Function invoked when the exam is submitted */
  onSubmitExam(){
    this.lesson = this.selectedLesson.lessonType;
  }
  
  /* Function invoked when a user clicks Cancel in Exam page */
  onCancelExam(){
     this.lesson = this.selectedLesson.lessonType;
  }
  
  /* function invoked when user clicks on Play button in Text to Speech Lesson */
   onPlay(){
   if(window.speechSynthesis.paused)
     window.speechSynthesis.resume(); else{
        const {SpeechSynthesisUtterance}: IWindow = <IWindow>window;
     const {speechSynthesis}: IWindow = <IWindow>window;
    // Create a new instance of SpeechSynthesisUtterance.
      var msg = new SpeechSynthesisUtterance();
     msg.onboundary = function( e ) {
   
         this.prog_index = e.charIndex;
     }
      // Set the text.
      msg.text =this.selectedChapter.body;
      // Set the attributes.
       msg.lang = 'en-US';
      for(var i = 0; i < this.voices.length ; i++) 
        if(this.voices[i].name === this.voice) 
          msg.voice = this.voices[i];
        msg.volume = 1;
        msg.rate = this.speed;
        msg.pitch = 1;
      (<any>window).speechSynthesis.speak(msg);}
  }
  
  /* Function to select a voice from dropdown */
  onVoiceSelect(e){
    if(window.speechSynthesis)
      window.speechSynthesis.cancel();
    this.voice = e.value;
  }
  
  /* Function to select the Speed from dropdown */
  onSpeedSelect(e){
    if(window.speechSynthesis)
      window.speechSynthesis.cancel();
    this.speed = e;
  }
  
  /* function invoked when user clicks on Pause button in Text to Speech Lesson */
  onPause(){
   if(window.speechSynthesis.speaking)
      window.speechSynthesis.pause();
  }
  
 }

