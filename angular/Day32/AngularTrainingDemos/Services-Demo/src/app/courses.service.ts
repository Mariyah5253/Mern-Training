import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  courses: string[] = ['MySQL', 'MongoDB', 'Node.js', 'React', 'Angular'];

  getCourse(): string[] {
    return this.courses;
  }
  
  constructor() { }
}
