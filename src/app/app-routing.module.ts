import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component'
import { InprogressComponent } from './inprogress/inprogress.component'
import { ModuleComponent } from './module/module.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduledProgramsComponent } from './scheduled-programs/scheduled-programs.component';
import { LoginComponent } from './login/login.component';
import { LessonComponent } from './lesson/lesson.component';
import { DayComponent } from './day/day.component';
import { SelfregistrationComponent } from './selfregistration/selfregistration.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { TrainingManagerComponent } from './training-manager/training-manager.component';
import { AuthguardGuard } from './authguard.guard';
// const routes: Routes = [{path: '', component: LoginComponent},
const routes: Routes = [{path: '', component: LoginComponent},
  { path: 'training-detail',canActivate:[AuthguardGuard], component:  TrainingDetailComponent },
  { path: 'manager',canActivate:[AuthguardGuard], component:  TrainingManagerComponent },
  // { path: 'training-detail', component:  TrainingDetailComponent
  //  },
  { path: 'training-detail/courses/:id', component: DayComponent },
  { path: 'courses/:id', component: DayComponent },
  { path: 'training-detail/courses/:id/lessons/:id', component: LessonComponent },
  { path: 'courses/:id/lessons/:id', component: LessonComponent },
  { path: 'dashboard',canActivate:[AuthguardGuard], component:  DashboardComponent },
  { path: 'scheduled-programs', component:  ScheduledProgramsComponent },
  { path: 'scheduled-programs/training-program/:id', component:  TrainingProgramComponent },
  { path: 'scheduled-programs/training-program/:id/course', component:  CourseComponent },
  { path: 'scheduled-programs/training-program/:id/course/course-detail/:id', component:  CourseDetailComponent },
  { path: 'scheduled-programs/training-program/:id/course/course-detail/:id/module', component:  ModuleComponent },
  { path: 'inprogress/training-program/:id', component:  TrainingProgramComponent },
  { path: 'inprogress/training-program/:id/course', component:  CourseComponent },
  { path: 'inprogress/training-program/:id/course/course-detail/:id', component:  CourseDetailComponent },
  { path: 'inprogress/training-program/:id/course/course-detail/:id/module', component:  ModuleComponent },
  { path: 'completed/training-program/:id', component:  TrainingProgramComponent },
  { path: 'completed/training-program/:id/course', component:  CourseComponent },
  { path: 'completed/training-program/:id/course/course-detail/:id', component:  CourseDetailComponent },
  { path: 'completed/training-program/:id/course/course-detail/:id/module', component:  ModuleComponent },  
  { path: 'scheduled-programs/student', component:  StudentComponent },
  { path: 'student', component:  StudentComponent },
  { path: 'training-program', component:  TrainingProgramComponent },
  { path: 'course-detail', component:  CourseDetailComponent },
  { path: 'course-detail/:id', component:  CourseDetailComponent },
  { path: 'course-detail/:id/module', component:  ModuleComponent },
  { path: 'module', component:  ModuleComponent },
  { path: 'training-program/:id', component:  TrainingProgramComponent },
  { path: 'training-program/:id/course', component:  CourseComponent },
  { path: 'training-program/:id/course/course-detail/:id', component:  CourseDetailComponent },
  { path: 'training-program/:id/course/course-detail/:id/module', component:  ModuleComponent },
  { path: 'manager/selfregistration/:code', component:  SelfregistrationComponent },
  { path: 'student/selfregistration/:code', component:  SelfregistrationComponent },
  { path: 'inprogress', component:  InprogressComponent },
  { path: 'completed', component:  CompletedComponent },
  {path: '**', component: LoginComponent}
  ];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}