/* Class to store lesson data which can be imported by other components */
import { Chapter } from '../chapter/chapter'
export class Lesson {  
  id: number;
  lessonType: string;
  title: string;
  path: string;
  body: string;
  thumbnail: string;
  chapters:Chapter[];
}
