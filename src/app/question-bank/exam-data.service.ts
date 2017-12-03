import { Injectable }       from '@angular/core';
 
import { RadioButtonQuestion } from './question-radiobutton';
import { ImageRadioButtonQuestion } from './question-image-radiobutton';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
 
 /* This service consists of the questions from which exams page is formed */
@Injectable()
export class ExamDataService {
 
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new RadioButtonQuestion({
        key: 'MCQ1', 
        label: '1. This is a multiple question - more specific questions will be added later here',
        options: [
          {key: 'Option 1',  value: 'true'},
          {key: 'Option 2',  value: 'no'},
          {key: 'Option 3',   value: 'no'},
          {key: 'Option 4', value: 'no'}
        ],
        type: 'radio',
        required:true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'TBQ1',
        label: '2. For this question students need to write a sentence - questions to be added later',
        value: 'Expected answer here. But evaluated later against keywords.',
        required: true,
        order: 2
      }),
      new ImageRadioButtonQuestion({
        key: 'MCQ2', 
        label: '3.This is student - select the right picture. More specific questions to be added later',
        options: [
          {key: '/assets/images/MC1.jpg',  value: '1'},
          {key: '/assets/images/MC2.jpg',  value: '2'},
          {key: '/assets/images/MC3.jpg',   value: '3'},
          {key: '/assets/images/MC4.jpg', value: '4'}
        ],
        type: 'img-radio',
        required: true,
        order: 3
      })];
    return questions.sort((a, b) => a.order - b.order);
  }
}