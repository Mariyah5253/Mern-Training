import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Services';
  skills: string[] = [];

  // DI
  constructor(private theService:CoursesService) {}

  ngOnInit() {
    //this.skills = this.theService.getCourse();
  }
}

