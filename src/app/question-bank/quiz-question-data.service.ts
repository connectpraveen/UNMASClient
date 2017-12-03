import { Injectable }       from '@angular/core';
 
import { RadioButtonQuestion } from './question-radiobutton';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
 
 /* This service consists of the questions from which quiz page is formed */
@Injectable()
export class QuizQuestionDataService {
   getQuestions() {
     let questions: QuestionBase<any>[] = [
       new RadioButtonQuestion({
        key: 'MCQ1', 
        label: '1. This is a multiple question - more specific questions will be added later here',
        options: [
          {key: 'Option 1',  value: 'on'},
          {key: 'Option 2',  value: 'on'},
          {key: 'Option 3',   value: 'on'},
          {key: 'Option 4', value: 'on'}
        ],
        type: 'radio',
        order: 1
      }),
      new RadioButtonQuestion({
        key: 'MCQ2', 
        label: '2. This is second multiple question - more specific questions will be added later here',
        options: [
          {key: 'Option 1',  value: 'on'},
          {key: 'Option 2',  value: 'on'},
          {key: 'Option 3',   value: 'on'},
          {key: 'Option 4', value: 'on'}
        ],
        type: 'radio',
        order: 2
      })];   return questions.sort((a, b) => a.order - b.order);
  }
}