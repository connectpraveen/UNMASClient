import { QuestionBase } from './question-base';

/* class to form Image Radio Button questions */
export class ImageRadioButtonQuestion extends QuestionBase<string> {
  controlType = 'img-radio';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}