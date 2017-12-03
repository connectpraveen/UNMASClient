import { QuestionBase } from './question-base';

/* class to form Radio Button questions */
export class RadioButtonQuestion extends QuestionBase<string> {
  controlType = 'radio';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}